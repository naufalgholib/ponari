"use client";

import React, { FC, useState } from "react";
import InputPrescription from "./InputPrescription";
import Each from "@/utils/Each";
import ButtonSaveForm from "../ButtonSaveForm";
import Overlay from "@/components/Overlay";

type PrescriptionFormProps = {
  onSelectedForm: React.Dispatch<React.SetStateAction<number>>;
};

const input = [
  {
    id: Date.now(),
    name: ["beforeMeals", "afterMeals"],
  },
];

export type inputType = {
  id: number;
  name: string[];
};

const PrescriptionForm: FC<PrescriptionFormProps> = ({ onSelectedForm }) => {
  const [countInput, setCountInput] = useState<inputType[]>(input);

  console.log(countInput);
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

        <h2 className="text-center mt-2 mb-10 text-[32px]">
          Prescription Form
        </h2>

        <div className="">
          <Each
            of={countInput}
            render={(input) => (
              <InputPrescription
                key={input.id}
                id={input.id}
                beforeMeals={input.name[0]}
                afterMeals={input.name[1]}
                onCountInput={setCountInput}
              />
            )}
          />

          <button
            onClick={() =>
              setCountInput((count) => [
                ...count,
                {
                  id: Date.now(),
                  name: [
                    `beforeMeals${count.length}`,
                    `afterMeals${count.length}`,
                  ],
                },
              ])
            }
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

          <ButtonSaveForm />
        </div>
      </div>
    </Overlay>
  );
};

export default PrescriptionForm;
