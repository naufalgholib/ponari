import Badge from "@/components/Badge";
import React, { FC } from "react";

type ScheduleItemProps = {
  time: string;
  name: string;
  patient: string;
  status: "In Progress" | "Scheduled";
};

const ScheduleItem: FC<ScheduleItemProps> = ({
  time,
  name,
  patient,
  status,
}) => {
  return (
    <div className="w-[1215px] h-[183px] bg-[#f5f5f5] rounded-[10px] p-4">
      <div className="flex items-center gap-4">
        <div>
          <svg
            width="42"
            height="37"
            viewBox="0 0 42 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0003 8.75V18.5L28.3337 21.75M39.3337 18.5C39.3337 27.4746 31.1255 34.75 21.0003 34.75C10.8751 34.75 2.66699 27.4746 2.66699 18.5C2.66699 9.52537 10.8751 2.25 21.0003 2.25C31.1255 2.25 39.3337 9.52537 39.3337 18.5Z"
              stroke="#B3B3B1"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="text-[30px] font-bold">{time}</h2>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-[30px]">{name}</p>
        <Badge
          color={status === "In Progress" ? "success" : "gray"}
          title={status}
        />
      </div>

      <p className="text-[30px]">Patient: {patient}</p>
    </div>
  );
};

export default ScheduleItem;