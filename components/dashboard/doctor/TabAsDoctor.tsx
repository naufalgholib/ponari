import React, { FC } from 'react'

interface TabAsDoctorProps {
  selectedTab: number;
  onSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabAsDoctor: FC<TabAsDoctorProps> = ({ selectedTab, onSelectedTab }) => {
  return (
    <div className="rounded-[12px] bg-[#F2F5F9] h-[60px] w-[330px] flex justify-between items-center p-4">
      <button
        onClick={() => onSelectedTab(1)}
        className={`h-[44px] w-[110px] ${selectedTab === 1 && "bg-white rounded-[12px] text-[16px]"
          }`}
      >
        Last Patient
      </button>
      <button
        onClick={() => onSelectedTab(2)}
        className={`h-[44px] w-[200px] ${selectedTab === 2 && "bg-white rounded-[12px] text-[16px]"
          }`}
      >
        Upcoming appointments
      </button>
    </div>
  )
}

export default TabAsDoctor;