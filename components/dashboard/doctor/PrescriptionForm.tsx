// PrescriptionForm.tsx
"use client";

import React, { FC, useState } from "react";
import InputPrescription from "./InputPrescription";
import Each from "@/utils/Each";
import ButtonSaveForm from "../ButtonSaveForm";
import Overlay from "@/components/Overlay";
import * as yup from "yup";

type PrescriptionFormProps = {
  onSelectedForm: React.Dispatch<React.SetStateAction<number>>;
};

export type PrescriptionInput = {
  id: number;
  medicine: string;
  dose: string;
  schedule: string;
  consumptionTime: "" | "beforeMeals" | "afterMeals";
};

export const prescriptionSchema = yup.object().shape({
  medicine: yup
    .string()
    .required("Medicine name is required")
    .min(2, "Medicine name must be at least 2 characters")
    .max(50, "Medicine name must be at most 50 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "Only letters, numbers and spaces are allowed"),
  dose: yup
    .string()
    .required("Dose is required")
    .matches(/^\d{1,4}$/, "Dose must be between 1-4 digits"),
  schedule: yup
    .string()
    .required("Schedule is required")
    .matches(/^\d{1}$/, "Schedule must be exactly 1 digit"),
  consumptionTime: yup
    .string()
    .required("Consumption time is required")
    .oneOf(["", "beforeMeals", "afterMeals"], "Please select consumption time")
});

const initialInput = {
  id: Date.now(),
  medicine: "",
  dose: "",
  schedule: "",
  consumptionTime: "" as "" | "beforeMeals" | "afterMeals"
};

const PrescriptionForm: FC<PrescriptionFormProps> = ({ onSelectedForm }) => {
  const [prescriptions, setPrescriptions] = useState<PrescriptionInput[]>([initialInput]);
  const [errors, setErrors] = useState<{ [key: string]: { [key: string]: string } }>({});

  const validateField = async (id: number, field: string, value: string) => {
    try {
      await prescriptionSchema.validateAt(field, { [field]: value });
      setErrors(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          [field]: ""
        }
      }));
      return true;
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrors(prev => ({
          ...prev,
          [id]: {
            ...prev[id],
            [field]: error.message
          }
        }));
      }
      return false;
    }
  };

  const handleAddPrescription = () => {
    setPrescriptions(prev => [...prev, { ...initialInput, id: Date.now() }]);
  };

  const handleRemovePrescription = (id: number) => {
    setPrescriptions(prev => prev.filter(item => item.id !== id));
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[id];
      return newErrors;
    });
  };

  const handleSave = async () => {
    let isValid = true;
    const newErrors: { [key: string]: { [key: string]: string } } = {};

    for (const prescription of prescriptions) {
      try {
        await prescriptionSchema.validate(prescription, { abortEarly: false });
      } catch (error) {
        isValid = false;
        if (error instanceof yup.ValidationError) {
          newErrors[prescription.id] = error.inner.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.path!]: curr.message
            }),
            {}
          );
        }
      }
    }

    setErrors(newErrors);
    
    if (isValid) {
      // Handle successful validation
      console.log("Valid prescriptions:", prescriptions);
    }
  };

  return (
    <Overlay>
      <div className="relative h-[629px] w-[570px] bg-white rounded-[20px] p-10 overflow-y-scroll">
        <div
          className="absolute right-10 top-7 cursor-pointer"
          onClick={() => onSelectedForm(0)}
        >
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.12646 1.09961L10.4081 11.4231M19.6897 21.7466L10.4081 11.4231M10.4081 11.4231L19.6897 1.09961L1.12646 21.7466"
              stroke="black"
            />
          </svg>
        </div>

        <h2 className="text-center mt-2 mb-10 text-[32px]">Prescription Form</h2>

        <div>
          <Each
            of={prescriptions}
            render={(prescription) => (
              <InputPrescription
                key={prescription.id}
                prescription={prescription}
                errors={errors[prescription.id] || {}}
                onUpdate={(field, value) => {
                  setPrescriptions(prev =>
                    prev.map(p =>
                      p.id === prescription.id
                        ? { ...p, [field]: value }
                        : p
                    )
                  );
                  validateField(prescription.id, field, value);
                }}
                onRemove={() => handleRemovePrescription(prescription.id)}
              />
            )}
          />

          <button
            onClick={handleAddPrescription}
            className="mt-8 w-[101px] h-[42px] rounded-[4px] flex items-center justify-center gap-1 bg-[#F5F5F5] border border-[#878787] hover:bg-[#f5f5f57a]"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.05518 12.8452H12.5552M12.5552 12.8452H20.0552M12.5552 12.8452V5.34521M12.5552 12.8452V20.3452"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            ADD
          </button>

          <ButtonSaveForm onClick={handleSave} />
        </div>
      </div>
    </Overlay>
  );
};

export default PrescriptionForm;