import React, { FC } from "react";

const RegisterAppointmentForm: FC = () => {
  return (
    <section className="max-w-[1310px] mx-auto py-6">
      <div className="flex justify-center mt-6 items-center gap-4">
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
        <h2 className="text-[36px] font-bold">Schedule New Appointment</h2>
      </div>

      <div>
        <h2 className="text-[32px] font-bold">Patient Nama</h2>
        <input
          type="text"
          placeholder="Enter patient name"
          className="border-[#b3b3b1] border-[2px] rounded-[20px] w-[1313px] h-[91px] focus:text-[32px] placeholder:text-[32px] px-4 focus:outline-none"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-[32px] font-bold">Patient ID/NIK</h2>
        <input
          type="text"
          placeholder="Enter patient ID or NIK"
          className="border-[#b3b3b1] border-[2px] rounded-[20px] w-[1313px] h-[91px] focus:text-[32px] placeholder:text-[32px] px-4 focus:outline-none"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-[32px] font-bold">Select Doctor</h2>
        <select
          name="cars"
          id="cars"
          className="border-[#b3b3b1] border-[2px] rounded-[20px] w-[1313px] h-[91px] focus:text-[32px] text-[32px] px-4 focus:outline-none"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div>
          <h2 className="text-[32px] font-bold">Appointment Date</h2>

          <input
            type="date"
            placeholder="Enter patient name"
            className="border-[#b3b3b1] border-[2px] rounded-[20px] w-[643px] h-[91px] focus:text-[32px] text-[32px] px-4 focus:outline-none"
          />
        </div>

        <div>
          <h2 className="text-[32px] font-bold">Appointment Time</h2>

          <select
            name="cars"
            id="cars"
            className="border-[#b3b3b1] border-[2px] rounded-[20px] w-[643px] h-[91px] focus:text-[32px] text-[32px] px-4 focus:outline-none"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-[32px] font-bold">Notes</h2>
        <textarea
          name=""
          id=""
          placeholder="Add any additional notes"
          className="w-[1313px] h-[248px] border-[#b3b3b1] border-[2px] rounded-[20px] focus:outline-none focus:text-[32px] text-[32px] p-4 resize-none"
        ></textarea>
      </div>

      <div className="flex justify-center items-center mt-8">
        <button className="bg-black w-[480px] h-[80px] text-white rounded-[20px]">
          Save
        </button>
      </div>
    </section>
  );
};

export default RegisterAppointmentForm;
