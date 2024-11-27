import React, { FC } from "react";
import ContactDoctorItem from "./ContactDoctorItem";
import Back from "@/components/Back";

const ContactDoctor: FC = () => {
  return (
    <section className="max-w-[1310px] mx-auto py-6">
      <div className="py-4">
        <h2 className="text-[55px] font-bold">Contact Doctor</h2>
      </div>

      <div className="flex justify-between items-center">
        <Back href="/dashboard-as-receptionist" />

        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search doctors..."
            className="w-[473px] h-[65px] rounded-[20px] border-[2px] border-[#b3b3b1] text-[32px] focus:outline-none focus:text-[32px] pl-14"
          />
          <div className="absolute top-4 left-4">
            <svg
              width="28"
              height="31"
              viewBox="0 0 28 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.25 28.625L19.8125 22.2812M22.75 14.0417C22.75 20.485 18.2728 25.7083 12.75 25.7083C7.22715 25.7083 2.75 20.485 2.75 14.0417C2.75 7.59834 7.22715 2.375 12.75 2.375C18.2728 2.375 22.75 7.59834 22.75 14.0417Z"
                stroke="#B3B3B3"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full h-[1007px] border-[2px] border-[#b3b3b1] rounded-[40px] mt-6 overflow-hidden">
        <div className="pb-14 px-6 mt-8 overflow-y-scroll space-y-6 h-full overflow-hidden">
          <ContactDoctorItem
            name="dr. Adam H."
            type="General Practitioner"
            status="In session"
          />
          <ContactDoctorItem
            name="dr. Iqbal A."
            type="General Practitioner"
            status="Available"
          />
          <ContactDoctorItem
            name="dr. Iqbal A."
            type="General Practitioner"
            status="Available"
          />
          <ContactDoctorItem
            name="dr. Syekha"
            type="Cardiologist"
            status="Away"
          />
          <ContactDoctorItem
            name="dr. Syekha"
            type="Cardiologist"
            status="Away"
          />
          <ContactDoctorItem
            name="dr. Syekha"
            type="Cardiologist"
            status="Away"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactDoctor;