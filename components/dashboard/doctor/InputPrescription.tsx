import React, { FC } from "react";
import type { inputType } from "./PrescriptionForm";

type InputPrescriptionProps = {
  id: number;
  beforeMeals: string;
  afterMeals: string;
  onCountInput: React.Dispatch<React.SetStateAction<inputType[]>>;
};

const InputPrescription: FC<InputPrescriptionProps> = ({
  id,
  beforeMeals,
  afterMeals,
  onCountInput,
}) => {
  return (
    <section className="mb-4">
      <div className="flex justify-between gap-2 items-center">
        <div>
          <label htmlFor="" className="text-[12px] text-[#00000099]">
            Medicine
          </label>
          <input
            type="text"
            className="border-b border-[#0000006B] w-[220px] focus:outline-none"
          />
        </div>

        <div className="relative">
          <label htmlFor="" className="text-[12px] text-[#00000099]">
            Dose
          </label>
          <input
            type="number"
            className="border-b border-[#0000006B] w-[119px] focus:outline-none"
          />
          <span className="text-[#00000061] absolute right-0 text-[14px]">mg</span>
        </div>

        <div className="relative">
          <label htmlFor="" className="text-[12px] text-[#00000099]">
            Schedule
          </label>
          <input
            type="number"
            className="border-b border-[#0000006B] w-[119px] focus:outline-none"
          />
          <span className="text-[#00000061] absolute right-0 text-[14px]">times a day</span>
        </div>

        <div
          className="cursor-pointer"
          onClick={() =>
            onCountInput((input) => input.filter((item) => item.id !== id))
          }
        >
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
            name={beforeMeals}
            id={afterMeals}
            className="h-[18px] w-[18px]"
          />
          <label htmlFor={afterMeals}>After meals</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            name={beforeMeals}
            id={beforeMeals}
            className="h-[18px] w-[18px]"
          />
          <label htmlFor={beforeMeals}>Before meals</label>
        </div>
      </div>
    </section>
  );
};

export default InputPrescription;
