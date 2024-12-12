"use client"

import React from 'react';
import PatientHistory from '@/components/dashboard/receptionist/PatientHistory';

const App = () => {
  // Data pasien
  const patientData = {
    name: 'Budi Santoso',
    nik: '1234567890123456'
  };

  // Fungsi untuk menangani tombol kembali
  const handleBack = () => {
    console.log('Kembali ditekan');
  };

  return (
    <div>
      <PatientHistory patient={patientData} onBack={handleBack} />
    </div>
  );
};

export default App;
