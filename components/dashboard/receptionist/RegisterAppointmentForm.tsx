"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Back from "@/components/Back";

// Doctors list (mock data - replace with actual data source)
const DOCTORS = [
  { id: "dr001", name: "Dr. Sarah Johnson" },
  { id: "dr002", name: "Dr. Michael Lee" },
  { id: "dr003", name: "Dr. Emily Rodriguez" },
  { id: "dr004", name: "Dr. David Kim" }
];

// Time slots within hospital operating hours
const TIME_SLOTS = [
  "08:00", "09:00", "10:00", "11:00", 
  "12:00", "13:00", "14:00", "15:00", 
  "16:00", "17:00"
];

type AppointmentFormData = {
  patientName: string;
  patientId: string;
  doctor: string;
  appointmentDate: Date;
  appointmentTime: string;
  notes?: string;
};

// Validation schema
const appointmentSchema = yup.object().shape({
  patientName: yup
    .string()
    .required("Patient name is required")
    .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces allowed")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  
  patientId: yup
    .string()
    .required("Patient ID is required")
    .matches(/^\d{16}$/, "Patient ID must be exactly 16 digits"),
  
  doctor: yup
    .string()
    .required("Please select a doctor"),
  
  appointmentDate: yup
    .date()
    .required("Appointment date is required")
    .min(new Date(), "Date must be in the future")
    .max(
      new Date(new Date().setMonth(new Date().getMonth() + 3)), 
      "Date must be within next 3 months"
    ),
  
  appointmentTime: yup
    .string()
    .required("Appointment time is required"),
  
  notes: yup
    .string()
    .max(200, "Notes cannot exceed 200 characters")
});

const RegisterAppointmentForm = () => {
  const { 
    control, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(appointmentSchema),
    defaultValues: {
      patientName: "",
      patientId: "",
      doctor: "",
      appointmentDate: new Date(),
      appointmentTime: "",
      notes: ""
    }
  });

  const onSubmit = (data: AppointmentFormData) => {
    console.log(data);
    // Implement submission logic
  };

  return (
    <section className="max-w-[1310px] mx-auto py-6 px-4">
      <div className="flex justify-center mt-6 items-center gap-4">
        <svg
          width="48"
          height="48"
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
        <h2 className="text-4xl font-bold">Schedule New Appointment</h2>
      </div>

      <Back href="/dashboard-as-receptionist" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Patient Name</h2>
          <Controller
            name="patientName"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  placeholder="Enter patient name"
                  className="w-full border-2 border-[#b3b3b1] rounded-[20px] h-[91px] px-4 text-3xl focus:outline-none"
                />
                {errors.patientName && (
                  <p className="text-red-500 mt-2 text-xl">
                    {errors.patientName.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">Patient ID/NIK</h2>
          <Controller
            name="patientId"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  placeholder="Enter patient ID or NIK"
                  className="w-full border-2 border-[#b3b3b1] rounded-[20px] h-[91px] px-4 text-3xl focus:outline-none"
                />
                {errors.patientId && (
                  <p className="text-red-500 mt-2 text-xl">
                    {errors.patientId.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">Select Doctor</h2>
          <Controller
            name="doctor"
            control={control}
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-full border-2 border-[#b3b3b1] rounded-[20px] h-[91px] px-4 text-3xl focus:outline-none cursor-pointer"
                >
                  <option value="">Select a doctor</option>
                  {DOCTORS.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
                {errors.doctor && (
                  <p className="text-red-500 mt-2 text-xl">
                    {errors.doctor.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex justify-between space-x-4">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-2">Appointment Date</h2>
            <Controller
              name="appointmentDate"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div>
                  <input
                    type="date"
                    className="w-full border-2 border-[#b3b3b1] rounded-[20px] h-[91px] px-4 text-3xl focus:outline-none"
                    value={value ? value.toISOString().split('T')[0] : ''} // Konversi Date ke string format YYYY-MM-DD
      onChange={(e) => onChange(new Date(e.target.value))}   // Konversi string kembali ke Date
      onBlur={onBlur}
      ref={ref}
                  />
                  {errors.appointmentDate && (
                    <p className="text-red-500 mt-2 text-xl">
                      {errors.appointmentDate.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-2">Appointment Time</h2>
            <Controller
              name="appointmentTime"
              control={control}
              render={({ field }) => (
                <div>
                  <select
                    {...field}
                    className="w-full border-2 border-[#b3b3b1] rounded-[20px] h-[91px] px-4 text-3xl focus:outline-none cursor-pointer"
                  >
                    <option value="">Select time slot</option>
                    {TIME_SLOTS.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.appointmentTime && (
                    <p className="text-red-500 mt-2 text-xl">
                      {errors.appointmentTime.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">Notes</h2>
          <Controller
            name="notes"
            control={control}
            render={({ field }) => (
              <div>
                <textarea
                  {...field}
                  placeholder="Add any additional notes"
                  className="w-full h-[248px] border-2 border-[#b3b3b1] rounded-[20px] p-4 text-3xl focus:outline-none resize-none"
                />
                {errors.notes && (
                  <p className="text-red-500 mt-2 text-xl">
                    {errors.notes.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex justify-center">
          <button 
            type="submit" 
            className="bg-black text-white rounded-[20px] text-3xl w-[480px] h-[80px] hover:bg-gray-800 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterAppointmentForm;