import React, { FC } from 'react'

interface HeaderSelectedTabProps {
  selectedTab: number;
}

const HeaderSelectedTab: FC<HeaderSelectedTabProps> = ({ selectedTab }) => {
  return (
    <div className="border-b border-[#BFBFBF] py-4 px-6">
      <h2>
        {selectedTab === 1 ? "Last Patient" : "Upcoming appointments"}
      </h2>
    </div>
  )
}

export default HeaderSelectedTab;