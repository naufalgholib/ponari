"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import PatientHistory from '@/components/dashboard/receptionist/PatientHistory';

const App = () => {
  // Data pasien
  const patientData = {
    name: 'Budi Santoso',
    nik: '1234567890123456'
  };

  const router = useRouter();
  // Fungsi untuk menangani tombol kembali
  const handleBack = () => {
    router.push('/dashboard-as-receptionist');
    console.log('Kembali ditekan');
  };

  return (
    <div>
      <PatientHistory patient={patientData} onBack={handleBack} />
    </div>
  );
};

export default App;
