"use client";

import React from "react";
import ConfirmAppointment from "@/components/dashboard/receptionist/ConfirmAppointment";

const App = () => {
  // Data pasien
  const patientData = {
    name: "Budi Santoso",
    nik: "1234567890123456",
    phone: "0812345678",
    address: "Jl. Lima",
  };

  // Fungsi untuk menangani tombol kembali
  const handleBack = () => {
    console.log("Kembali ditekan");
  };

  return (
    <div>
      <ConfirmAppointment patient={patientData} onBack={handleBack} />
    </div>
  );
};

export default App;
