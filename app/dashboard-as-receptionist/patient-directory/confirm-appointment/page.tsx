"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import ConfirmAppointment from "@/components/dashboard/receptionist/ConfirmAppointment";

const App = () => {
  // Data pasien
  const patientData = {
    name: "Budi Santoso",
    nik: "1234567890123456",
    phone: "0812345678",
    address: "Jl. Lima",
  };

  const router = useRouter();
  // Fungsi untuk menangani tombol kembali
  const handleBack = () => {
    router.push('/dashboard-as-receptionist');
    console.log("Kembali ditekan");
  };

  return (
    <div>
      <ConfirmAppointment patient={patientData} onBack={handleBack} />
    </div>
  );
};

export default App;
