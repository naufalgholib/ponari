import Back from "@/components/Back";
import React, { FC } from "react";
import ScheduleItem from "./ScheduleItem";

const ViewSchedule: FC = () => {
  return (
    <section className="max-w-[1310px] mx-auto pt-6">
      <div className="py-4">
        <h2 className="text-[55px] font-bold">View Schedule</h2>
      </div>

      <div className="flex justify-between items-center">
        <Back href="/dashboard-as-receptionist" />

        <div>
          <input
            type="date"
            className="border border-[#d9d9d9] h-[54px] w-[239px] rounded-[10px] focus:outline-none placeholder:text-[24px] text-[24px] p-4"
          />
        </div>
      </div>

      <div className="w-full h-[1010px] border border-[#b3b3b1] rounded-[20px] mt-8 pb-44 overflow-hidden">
        <div>
          <h2 className="text-[40px] font-bold py-10 px-6">
            Schedule for Thursday, October 24, 2024
          </h2>
        </div>

        <div className="h-full px-9 space-y-8 overflow-y-scroll">
          <ScheduleItem
            time="07:00 - 10:00"
            name="dr. Adam H."
            patient="Naufal Gholib"
            status="In Progress"
          />
          <ScheduleItem
            time="07:00 - 10:00"
            name="dr. Iqbal A."
            patient="Saiful"
            status="Scheduled"
          />
          <ScheduleItem
            time="07:00 - 10:00"
            name="dr. Adam H."
            patient="Naufal Gholib"
            status="Scheduled"
          />
          <ScheduleItem
            time="07:00 - 10:00"
            name="dr. Adam H."
            patient="Naufal Gholib"
            status="Scheduled"
          />
          <ScheduleItem
            time="07:00 - 10:00"
            name="dr. Adam H."
            patient="Naufal Gholib"
            status="In Progress"
          />
        </div>
      </div>
    </section>
  );
};

export default ViewSchedule;
