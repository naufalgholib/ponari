"use client";

import React, { FC, useState } from "react";
import LastPatient from "./LastPatient";
import UpcomingAppointments from "./UpcomingAppointments";
import AvatarProfileCard from "../AvatarProfileCard";
import TabAsDoctor from "./TabAsDoctor";
import HeaderSelectedTab from "./HeaderSelectedTab";
import EditProfileForm from "../EditProfileForm";
import DetailProfileCard from "../DetailProfileCard";

const HomepageDashboard: FC = ({ }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [showEditProfile, setShowEditProfile] = useState(false);
  return (
    <>
      {showEditProfile && <EditProfileForm onEditProfile={setShowEditProfile} />}
      <section className="bg-[#F2F5F9] space-y-8 pb-10">
        <div className="max-w-[1100px] mx-auto pt-5 flex justify-between items-center gap-4">
          <AvatarProfileCard name="Dr. Adam H." email="adamh@email.com" />
          <DetailProfileCard
            name="Adam Hawkins"
            birthday="25 Oct 1969"
            phone_number="(063) 222-4444"
            address="Sonyachna str.226b"
            city="Khorkiv"
            gender="Male"
            nik="09123110129111"
            onEditProfile={setShowEditProfile}
          />
        </div>

        <div className="max-w-[1100px] mx-auto bg-white rounded-[12px] pt-8 pb-16 px-12 space-y-8">
          <TabAsDoctor selectedTab={selectedTab} onSelectedTab={setSelectedTab} />

          <div className="bg-[#F2F5F9] rounded-[12px] h-[496px] w-[1027px] overflow-hidden pb-14">
            <HeaderSelectedTab selectedTab={selectedTab} />
            {selectedTab === 1 ? <LastPatient /> : <UpcomingAppointments />}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageDashboard;
