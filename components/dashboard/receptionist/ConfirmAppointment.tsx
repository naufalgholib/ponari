"use client";

import React, { FC, useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User, Check } from 'lucide-react';

interface ConfirmAppointmentProps {
  patient: {
    name: string;
    nik: string;
    phone: string;
    address: string;
  };
  onBack: () => void;
}

const ConfirmAppointment: FC<ConfirmAppointmentProps> = ({ patient, onBack }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  if (isConfirmed) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="py-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold">Janji Temu Dikonfirmasi</h2>
            <p className="text-gray-600">Pasien dapat langsung menuju ke ruang praktik dr. Iqbal A.</p>
            <Button onClick={onBack} className="mt-4">
              Kembali ke Menu Utama
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Konfirmasi Kedatangan Pasien</h2>
          <p className="text-gray-500">{patient.name} - NIK: {patient.nik}</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2" onClick={onBack}>
          <ArrowLeft size={16} />
          Kembali
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Appointment Details */}
          <div className="bg-blue-50 p-4 rounded-lg space-y-3">
            <div className="flex items-center gap-2 text-blue-800">
              <Clock size={20} />
              <span className="font-medium">Jadwal Janji Temu Hari Ini</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Dokter</p>
                <p className="font-medium">dr. Iqbal A.</p>
              </div>
              <div>
                <p className="text-gray-600">Waktu Janji</p>
                <p className="font-medium">1 April 2024 - 09:00 WIB</p>
              </div>
            </div>
          </div>

          {/* Patient Info */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <div className="flex items-center gap-2 text-gray-800">
              <User size={20} />
              <span className="font-medium">Informasi Pasien</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Nama Lengkap</p>
                <p className="font-medium">{patient.name}</p>
              </div>
              <div>
                <p className="text-gray-600">NIK</p>
                <p className="font-medium">{patient.nik}</p>
              </div>
              <div>
                <p className="text-gray-600">Nomor Telepon</p>
                <p className="font-medium">{patient.phone}</p>
              </div>
              <div>
                <p className="text-gray-600">Alamat</p>
                <p className="font-medium">{patient.address}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onBack}>
              Batal
            </Button>
            <Button onClick={() => setIsConfirmed(true)}>
              Konfirmasi Kedatangan
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfirmAppointment;