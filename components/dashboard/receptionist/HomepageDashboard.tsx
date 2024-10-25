import Each from "@/utils/Each";
import React, { FC } from "react";
import AppointmentItem from "./AppointmentItem";
import Link from "next/link";

const HomepageDashboard: FC = () => {
  return (
    <section className="max-w-[1310px] mx-auto">
      <div className="flex justify-between items-center py-10">
        <h2 className="text-[55px] font-bold">
          Ponari - Receptionist Dashboard
        </h2>
        <Link
          href="/dashboard-as-receptionist/register-new-appointment"
          className="w-[401px] h-[86px] rounded-[20px] text-white bg-black flex justify-center items-center text-[30px]"
        >
          Register New Patient
        </Link>
      </div>

      <div className="w-full h-[585px] bg-[#f3f3f3] border-[2px] border-[#a59b9b] rounded-[40px] py-10 px-24 mb-16">
        <div className="flex items-center gap-4">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.333 5.12484H29.7913V2.0415H26.708V5.12484H11.2913V2.0415H8.20801V5.12484H6.66634C4.97051 5.12484 3.58301 6.51234 3.58301 8.20817V32.8748C3.58301 34.5707 4.97051 35.9582 6.66634 35.9582H31.333C33.0288 35.9582 34.4163 34.5707 34.4163 32.8748V8.20817C34.4163 6.51234 33.0288 5.12484 31.333 5.12484ZM31.333 32.8748H6.66634V12.8332H31.333V32.8748Z"
              fill="black"
              fillOpacity="0.56"
            />
          </svg>
          <h2 className="text-[36px] font-bold">Today&apos;s Appointments</h2>
        </div>

        <div className="w-[1145px] h-[432px] overflow-y-scroll">
          <Each
            of={[1, 2, 3, 4, 5, 6]}
            render={(item) => {
              if (item % 2 === 0) return <AppointmentItem status="waiting" />;

              return <AppointmentItem status="In Progress" />;
            }}
          />
        </div>
      </div>

      <div className="h-[345px] w-full bg-[#f3f3f3] border-[2px] border-[#a59b9b] rounded-[40px] py-10 px-24">
        <div className="flex items-center gap-4">
          <svg
            width="32"
            height="34"
            viewBox="0 0 32 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.333 3.12484H26.7913V0.0415039H23.708V3.12484H8.29134V0.0415039H5.20801V3.12484H3.66634C1.97051 3.12484 0.583008 4.51234 0.583008 6.20817V30.8748C0.583008 32.5707 1.97051 33.9582 3.66634 33.9582H28.333C30.0288 33.9582 31.4163 32.5707 31.4163 30.8748V6.20817C31.4163 4.51234 30.0288 3.12484 28.333 3.12484ZM28.333 30.8748H3.66634V10.8332H28.333V30.8748Z"
              fill="black"
              fillOpacity="0.56"
            />
          </svg>

          <h2 className="text-[36px] font-bold">Quick Actions</h2>
        </div>

        <div className="w-[1312px] mt-4">
          <div className="flex items-center gap-9">
            <Link
              href="/dashboard-as-receptionist/schedule-appointment"
              className="flex justify-center items-center w-[532px] h-[84px] border border-[#b3b3b1] rounded-[20px] text-[32px] bg-white"
            >
              Schedule Appointment
            </Link>
            <Link
              href="/dashboard-as-receptionist/view-schedule"
              className="flex justify-center items-center w-[532px] h-[84px] border border-[#b3b3b1] rounded-[20px] text-[32px] bg-white"
            >
              View Schedule
            </Link>
          </div>

          <div className="flex items-center gap-9 mt-8">
            <Link
              href="/dashboard-as-receptionist/contact-doctor"
              className="flex justify-center items-center w-[532px] h-[84px] border border-[#b3b3b1] rounded-[20px] text-[32px] bg-white"
            >
              Contact Doctor
            </Link>
            <Link
              href="/dashboard-as-receptionist/patient-directory"
              className="flex justify-center items-center w-[532px] h-[84px] border border-[#b3b3b1] rounded-[20px] text-[32px] bg-white"
            >
              Patient Directory
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageDashboard;
