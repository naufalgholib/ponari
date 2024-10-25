"use client";

import React, { FC, useState } from 'react'
import EditProfileForm from '../EditProfileForm';
import DetailProfileCard from '../DetailProfileCard';
import AvatarProfileCard from '../AvatarProfileCard';
import TabAsPatient from './TabAsPatient';
import HeaderSelectedTab from './HeaderSelectedTab';
import LastMedicalRecords from './LastMedicalRecords';
import MedicalRecord from './MedicalRecord';

const HomepageDashboard: FC = () => {
  const [showEditProfile, setShowEditProfile] = useState<boolean>(false);
  const [showMedicalRecord, setShowMedicalRecord] = useState<number>(0);
  return (
    <>
      {showEditProfile && <EditProfileForm onEditProfile={setShowEditProfile} />}
      {showMedicalRecord !== 0 && <MedicalRecord onMedicalRecord={setShowMedicalRecord} />}

      <section className="bg-[#F2F5F9] space-y-8 pb-10">
        <div className="max-w-[1100px] mx-auto pt-5 flex justify-between items-center gap-4">
          <AvatarProfileCard name='John Doe' email='johndoe@email.com' />
          <DetailProfileCard
            name="John Doe"
            birthday="25 Oct 1992"
            phone_number="(063) 222-3333"
            address="Sonyachna str. 226B"
            city="Khorkiv"
            gender="Male"
            nik="0913110129111"
            onEditProfile={setShowEditProfile}
          />
        </div>

        <div className="max-w-[1100px] mx-auto bg-white rounded-[12px] pt-8 pb-16 px-12 space-y-8">
          <TabAsPatient />
          <div className="bg-[#F2F5F9] rounded-[12px] h-[496px] w-[1027px] overflow-hidden pb-14">
            <HeaderSelectedTab />
            <LastMedicalRecords onMedicalRecord={setShowMedicalRecord} />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomepageDashboard