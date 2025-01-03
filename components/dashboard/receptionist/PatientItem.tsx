import React, { FC } from "react";
import Link from "next/link";

type PatientItemProps = {
  name: string;
  nik: string;
  last_visit: string;
  next_appointment: string;
  phone: string;
  address: string;
};

const PatientItem: FC<PatientItemProps> = ({
  name,
  nik,
  last_visit,
  next_appointment,
  phone,
  address,
}) => {
  return (
    <div className="w-[1313px] h-[282px] rounded-[20px] border-[2px] border-[#b3b3b1] mt-10 px-8 py-2">
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="text-[36px] font-bold">{name}</h2>
          <p className="text-[20px] text-[#b3b3b1]">NIK : {nik}</p>
        </div>

        <div>
          <p className="text-[25px] text-[#b3b3b1]">
            Last Visit : {last_visit}
          </p>
          <p className="text-[25px] text-[#5981d0]">
            Next Appointment : {next_appointment}
          </p>
        </div>
      </div>

      <div className="mt-4 mb-6">
        <div className="flex items-center gap-4">
          <div>
            <svg
              width="25"
              height="30"
              viewBox="0 0 25 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.917 21.1501V24.9001C22.9182 25.2482 22.8587 25.5928 22.7425 25.9118C22.6263 26.2308 22.4558 26.5171 22.2421 26.7525C22.0283 26.9878 21.7759 27.167 21.5011 27.2785C21.2263 27.39 20.9351 27.4315 20.6461 27.4001C17.4408 26.9822 14.3618 25.6678 11.6566 23.5626C9.13972 21.6435 7.00588 19.0828 5.40657 16.0626C3.64613 12.8016 2.55057 9.08886 2.20865 5.22512C2.18262 4.87945 2.21685 4.53107 2.30917 4.20215C2.40149 3.87323 2.54987 3.57098 2.74486 3.31465C2.93986 3.05831 3.1772 2.85351 3.44177 2.71327C3.70633 2.57304 3.99234 2.50045 4.28157 2.50012H7.40657C7.91209 2.49415 8.40218 2.70897 8.78549 3.10454C9.16879 3.5001 9.41915 4.04943 9.4899 4.65012C9.6218 5.8502 9.86641 7.02853 10.2191 8.16262C10.3592 8.61003 10.3895 9.09626 10.3065 9.56372C10.2234 10.0312 10.0304 10.4603 9.75032 10.8001L8.4274 12.3876C9.91027 15.5171 12.0695 18.1082 14.6774 19.8876L16.0003 18.3001C16.2835 17.964 16.6411 17.7324 17.0306 17.6327C17.4202 17.533 17.8254 17.5694 18.1982 17.7376C19.1433 18.1608 20.1252 18.4543 21.1253 18.6126C21.6313 18.6983 22.0934 19.0041 22.4238 19.472C22.7541 19.9398 22.9297 20.5371 22.917 21.1501Z"
                stroke="#5A5A5A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="text-[20px]">{phone}</p>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <svg
              width="20"
              height="29"
              viewBox="0 0 20 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99967 28.25C9.66912 28.25 9.38579 28.1583 9.14968 27.975C8.91356 27.7917 8.73648 27.551 8.61843 27.2531C8.16981 25.9698 7.60315 24.7667 6.91843 23.6437C6.25731 22.5208 5.32467 21.2031 4.12051 19.6906C2.91634 18.1781 1.93648 16.7344 1.18092 15.3594C0.44898 13.9844 0.0830078 12.3229 0.0830078 10.375C0.0830078 7.69375 1.03926 5.425 2.95176 3.56875C4.88787 1.68958 7.23717 0.75 9.99967 0.75C12.7622 0.75 15.0997 1.68958 17.0122 3.56875C18.9483 5.425 19.9163 7.69375 19.9163 10.375C19.9163 12.4604 19.5031 14.2021 18.6768 15.6C17.874 16.975 16.9413 18.3385 15.8788 19.6906C14.6038 21.3406 13.6358 22.7156 12.9747 23.8156C12.3372 24.8927 11.8059 26.0385 11.3809 27.2531C11.2629 27.574 11.074 27.826 10.8143 28.0094C10.5781 28.1698 10.3066 28.25 9.99967 28.25ZM9.99967 23.3344C10.4011 22.5552 10.8497 21.7875 11.3455 21.0312C11.865 20.275 12.6205 19.2667 13.6122 18.0062C14.6275 16.7229 15.4538 15.5427 16.0913 14.4656C16.7525 13.3656 17.083 12.0021 17.083 10.375C17.083 8.47291 16.3865 6.85729 14.9934 5.52812C13.624 4.17604 11.9594 3.5 9.99967 3.5C8.03995 3.5 6.36356 4.17604 4.97051 5.52812C3.60106 6.85729 2.91634 8.47291 2.91634 10.375C2.91634 12.0021 3.23509 13.3656 3.87259 14.4656C4.5337 15.5427 5.3719 16.7229 6.38718 18.0062C7.37884 19.2667 8.12259 20.275 8.61843 21.0312C9.13787 21.7875 9.59829 22.5552 9.99967 23.3344ZM9.99967 13.8125C10.9913 13.8125 11.8295 13.4802 12.5143 12.8156C13.199 12.151 13.5413 11.3375 13.5413 10.375C13.5413 9.4125 13.199 8.59896 12.5143 7.93437C11.8295 7.26979 10.9913 6.9375 9.99967 6.9375C9.00801 6.9375 8.16981 7.26979 7.48509 7.93437C6.80037 8.59896 6.45801 9.4125 6.45801 10.375C6.45801 11.3375 6.80037 12.151 7.48509 12.8156C8.16981 13.4802 9.00801 13.8125 9.99967 13.8125Z"
                fill="#79747E"
              />
            </svg>
          </div>

          <p className="text-[20px]">{address}</p>
        </div>
      </div>

      <div className="flex justify-end items-center gap-4">
        <button className="text-[28px] font-bold h-[59px] w-[300px] rounded-[20px] border border-[#b3b3b1]">
          <Link href="/dashboard-as-receptionist/patient-directory/patient-history">
            Riwayat Kunjungan
          </Link>
        </button>
        <button className="text-[28px] font-bold h-[59px] w-[330px] rounded-[20px] border border-[#b3b3b1]">
          <Link href="/dashboard-as-receptionist/patient-directory/confirm-appointment">
            Konfirmasi Kedatangan
          </Link>
        </button>
        {/* <button className="text-[28px] text-white bg-black font-bold h-[59px] w-[195px] rounded-[20px] border border-[#b3b3b1]">
          Edit Details
        </button> */}
      </div>
    </div>
  );
};

export default PatientItem;