import React, { FC } from 'react'

type DetailProfileCardProps = {
  name: string;
  birthday: string;
  phone_number: string;
  address: string;
  city: string;
  gender: string;
  nik: string;
  onEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailProfileCard: FC<DetailProfileCardProps> = ({ name, birthday, phone_number, address, city, gender, nik, onEditProfile }) => {
  return (
    <div className="h-[402px] w-[740px] bg-white rounded-[12px] pt-10 px-14 flex gap-4 justify-between">
      <div className="space-y-8">
        <div className="flex">
          <div className="w-[236px]">
            <p className="text-[16px] font-bold">Name</p>
            <p>{name}</p>
          </div>

          <div>
            <p className="text-[16px] font-bold">Birthday</p>
            <p>{birthday}</p>
          </div>
        </div>

        <div className="flex">
          <div className="w-[236px]">
            <p className="text-[16px] font-bold">Phone Number</p>
            <p>{phone_number}</p>
          </div>

          <div>
            <p className="text-[16px] font-bold">Address</p>
            <p>{address}</p>
          </div>
        </div>

        <div className="flex">
          <div className="w-[236px]">
            <p className="text-[16px] font-bold">City</p>
            <p>{city}</p>
          </div>

          <div>
            <p className="text-[16px] font-bold">Gender</p>
            <p>{gender}</p>
          </div>
        </div>

        <div className="flex">
          <div className="w-[236px]">
            <p className="text-[16px] font-bold">NIK</p>
            <p>{nik}</p>
          </div>

          <div>
            <p className="text-[16px] font-bold">Member Status</p>
            <p>Active member</p>
          </div>
        </div>
      </div>

      <div>
        <button
          className="hover:bg-slate-50 transition-all h-[40px] w-[130px] border border-black text-[16px]"
          onClick={() => onEditProfile(true)}
        >
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default DetailProfileCard