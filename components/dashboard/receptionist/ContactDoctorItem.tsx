import Badge from "@/components/Badge";
import Link from "next/link";
import React, { FC } from "react";

type ContactDoctorItemProps = {
  name: string;
  type: string;
  status: string;
};

const ContactDoctorItem: FC<ContactDoctorItemProps> = ({
  name,
  type,
  status,
}) => {
  return (
    <div className="w-full h-[201px] border-[#b3b3b1] border-[2px] rounded-[20px] px-10 py-6">
      <h2 className="text-[28px] font-bold">{name}</h2>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-[28px] font-bold text-[#b3b3b1]">{type}</p>
          <Badge
            color={
              status === "In session"
                ? "warning"
                : status === "Available"
                ? "success"
                : "gray"
            }
            title={status}
          />
        </div>

        <div>
          <Link
            className="w-[194px] h-[76px] bg-black flex justify-center items-center gap-2"
            href="/dashboard-as-receptionist/contact-doctor/message"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42 30C42 31.0609 41.5786 32.0783 40.8284 32.8284C40.0783 33.5786 39.0609 34 38 34H14L6 42V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H38C39.0609 6 40.0783 6.42143 40.8284 7.17157C41.5786 7.92172 42 8.93913 42 10V30Z"
                stroke="#D9D9D9"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[28px] font-bold text-white">Message</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDoctorItem;