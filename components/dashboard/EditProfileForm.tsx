import React, { FC } from "react";
import ButtonSaveForm from "./ButtonSaveForm";
// import Overlay from "@/utils/Overlay";
import Overlay from "../Overlay";

type EditProfileFormProps = {
  onEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditProfileForm: FC<EditProfileFormProps> = ({ onEditProfile }) => {
  return (
    <Overlay>
      <div className="relative h-[620px] w-[570px] bg-white rounded-[20px] p-10">
        <div
          className="absolute right-10 top-7 cursor-pointer"
          onClick={() => onEditProfile(false)}
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

        <h2 className="text-center mt-2 mb-10 text-[32px]">Edit Profile</h2>

        <div>
          <div className="">
            <label htmlFor="" className="text-[12px] text-[#00000099] block">
              Name
            </label>
            <input
              type="text"
              className="border-b border-[#0000006B] w-full focus:outline-none"
              defaultValue="John Doe"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <div>
              <label htmlFor="" className="text-[12px] text-[#00000099] block">
                City
              </label>
              <input
                type="text"
                className="border-b border-[#0000006B] w-[292px] focus:outline-none"
                defaultValue="Khorkiv"
              />
            </div>

            <div>
              <label htmlFor="" className="text-[12px] text-[#00000099] block">
                Birthday
              </label>
              <input
                type="date"
                className="w-[160px] border-b border-[#0000006B] focus:outline-none"
                defaultValue="1992-11-10"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-[12px] text-[#00000099] block">
              Gender
            </label>

            <div className="flex items-center gap-6 mt-4 ml-4">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name=""
                  id=""
                  className="h-[18px] w-[18px]"
                  defaultChecked
                />
                <label htmlFor="">Male</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name=""
                  id=""
                  className="h-[18px] w-[18px]"
                />
                <label htmlFor="">Female</label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-[12px] text-[#00000099] block">
              Address
            </label>
            <input
              type="text"
              className="border-b border-[#0000006B] w-full focus:outline-none"
              defaultValue="Sonyachna str. 226B"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-[12px] text-[#00000099] block">
              Phone Number
            </label>
            <input
              type="text"
              className="border-b border-[#0000006B] w-full focus:outline-none"
              defaultValue="(063) 222-3333"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-[12px] text-[#00000099] block">
              NIK
            </label>
            <input
              type="number"
              className="border-b border-[#0000006B] w-full focus:outline-none"
              defaultValue="0913110129111"
            />
          </div>
        </div>
        <ButtonSaveForm />
      </div>
    </Overlay>
  );
};

export default EditProfileForm;
