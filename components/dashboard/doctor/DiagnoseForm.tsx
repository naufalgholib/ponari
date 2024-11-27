import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonSaveForm from "../ButtonSaveForm";
import Overlay from "@/components/Overlay";

type DiagnoseFormProps = {
  onSelectedForm: React.Dispatch<React.SetStateAction<number>>;
};

const schema = yup.object().shape({
  symptoms: yup
    .string()
    .required("Symptoms are required")
    .min(10, "Symptoms must be at least 10 characters")
    .max(500, "Symptoms cannot exceed 500 characters"),

  checkupResult: yup
    .string()
    .required("Check up result is required")
    .min(10, "Check up result must be at least 10 characters")
    .max(1000, "Check up result cannot exceed 1000 characters"),

  diagnose: yup
    .string()
    .required("Diagnose is required")
    .min(10, "Diagnose must be at least 10 characters")
    .max(500, "Diagnose cannot exceed 500 characters"),

  careSuggestions: yup
    .string()
    .required("Care suggestions are required")
    .min(10, "Care suggestions must be at least 10 characters")
    .max(500, "Care suggestions cannot exceed 500 characters"),
});

type FormData = yup.InferType<typeof schema>;

const DiagnoseForm: FC<DiagnoseFormProps> = ({ onSelectedForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Overlay>
      <div className="relative max-w-[90%] md:w-[570px] max-h-[90%] h-auto bg-white rounded-[20px] p-6 overflow-hidden shadow-lg">
        <div
          className="absolute right-5 top-5 cursor-pointer"
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
  
        <h2 className="text-center mt-4 mb-6 text-[24px] md:text-[32px] font-semibold">
          Diagnose Form
        </h2>
  
        <div className="overflow-y-auto max-h-[70vh]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="text-[16px] block mb-2">Symptoms</label>
              <textarea
                {...register("symptoms")}
                className="border border-black w-full h-[96px] focus:outline-none p-2 resize-none"
                placeholder="Enter symptoms (minimum 10 characters)"
              />
              {errors.symptoms && (
                <p className="text-red-500 text-sm mt-1">{errors.symptoms.message}</p>
              )}
            </div>
  
            <div>
              <label className="text-[16px] block mb-2">Check up result</label>
              <textarea
                {...register("checkupResult")}
                className="border border-black w-full h-[96px] focus:outline-none p-2 resize-none"
                placeholder="Enter check up result (minimum 10 characters)"
              />
              {errors.checkupResult && (
                <p className="text-red-500 text-sm mt-1">{errors.checkupResult.message}</p>
              )}
            </div>
  
            <div>
              <label className="text-[16px] block mb-2">Diagnose</label>
              <textarea
                {...register("diagnose")}
                className="border border-black w-full h-[96px] focus:outline-none p-2 resize-none"
                placeholder="Enter diagnose (minimum 10 characters)"
              />
              {errors.diagnose && (
                <p className="text-red-500 text-sm mt-1">{errors.diagnose.message}</p>
              )}
            </div>
  
            <div>
              <label className="text-[16px] block mb-2">Care Suggestions</label>
              <textarea
                {...register("careSuggestions")}
                className="border border-black w-full h-[96px] focus:outline-none p-2 resize-none"
                placeholder="Enter care suggestions (minimum 10 characters)"
              />
              {errors.careSuggestions && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.careSuggestions.message}
                </p>
              )}
            </div>
  
            <div className="pt-4">
              <ButtonSaveForm />
            </div>
          </form>
        </div>
      </div>
    </Overlay>
  );  
};

export default DiagnoseForm;