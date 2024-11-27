// InputPrescription.tsx
import React, { FC } from "react";
import { PrescriptionInput } from "./PrescriptionForm";

type InputPrescriptionProps = {
  prescription: PrescriptionInput;
  errors: { [key: string]: string };
  onUpdate: (field: string, value: string) => void;
  onRemove: () => void;
};

const InputPrescription: FC<InputPrescriptionProps> = ({
  prescription,
  errors,
  onUpdate,
  onRemove,
}) => {
  return (
    <section className="mb-4">
      <div className="flex justify-between gap-2 items-center">
        <div>
          <label htmlFor={`medicine-${prescription.id}`} className="text-[12px] text-[#00000099]">
            Medicine
          </label>
          <input
            id={`medicine-${prescription.id}`}
            type="text"
            value={prescription.medicine}
            onChange={(e) => onUpdate("medicine", e.target.value)}
            className={`border-b ${
              errors.medicine ? "border-red-500" : "border-[#0000006B]"
            } w-[220px] focus:outline-none`}
          />
          {errors.medicine && (
            <p className="text-red-500 text-xs mt-1">{errors.medicine}</p>
          )}
        </div>

        <div className="relative">
          <label htmlFor={`dose-${prescription.id}`} className="text-[12px] text-[#00000099]">
            Dose
          </label>
          <input
            id={`dose-${prescription.id}`}
            type="text"
            value={prescription.dose}
            onChange={(e) => onUpdate("dose", e.target.value)}
            className={`border-b ${
              errors.dose ? "border-red-500" : "border-[#0000006B]"
            } w-[119px] focus:outline-none`}
          />
          <span className="text-[#00000061] absolute right-0 text-[14px]">mg</span>
          {errors.dose && (
            <p className="text-red-500 text-xs mt-1">{errors.dose}</p>
          )}
        </div>

        <div className="relative">
          <label htmlFor={`schedule-${prescription.id}`} className="text-[12px] text-[#00000099]">
            Schedule
          </label>
          <input
            id={`schedule-${prescription.id}`}
            type="text"
            value={prescription.schedule}
            onChange={(e) => onUpdate("schedule", e.target.value)}
            className={`border-b ${
              errors.schedule ? "border-red-500" : "border-[#0000006B]"
            } w-[119px] focus:outline-none`}
          />
          <span className="text-[#00000061] absolute right-0 text-[14px]">times a day</span>
          {errors.schedule && (
            <p className="text-red-500 text-xs mt-1">{errors.schedule}</p>
          )}
        </div>

        <div className="cursor-pointer" onClick={onRemove}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7M13 13L7 7M7 7L13 1L1 13" stroke="black" />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-6 mt-4 ml-4">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name={`consumption-${prescription.id}`}
            id={`afterMeals-${prescription.id}`}
            checked={prescription.consumptionTime === "afterMeals"}
            onChange={() => onUpdate("consumptionTime", "afterMeals")}
            className="h-[18px] w-[18px]"
          />
          <label htmlFor={`afterMeals-${prescription.id}`}>After meals</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            name={`consumption-${prescription.id}`}
            id={`beforeMeals-${prescription.id}`}
            checked={prescription.consumptionTime === "beforeMeals"}
            onChange={() => onUpdate("consumptionTime", "beforeMeals")}
            className="h-[18px] w-[18px]"
          />
          <label htmlFor={`beforeMeals-${prescription.id}`}>Before meals</label>
        </div>
        {errors.consumptionTime && (
          <p className="text-red-500 text-xs">{errors.consumptionTime}</p>
        )}
      </div>
    </section>
  );
};

export default InputPrescription;