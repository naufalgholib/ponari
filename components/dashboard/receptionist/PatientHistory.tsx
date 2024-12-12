"use client";

import React, { FC } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface PatientHistoryProps {
  patient: {
    name: string;
    nik: string;
  };
  onBack: () => void;
}

const PatientHistory: FC<PatientHistoryProps> = ({ patient, onBack }) => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Riwayat Kunjungan Pasien</h2>
          <p className="text-gray-500">{patient.name} - NIK: {patient.nik}</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2" onClick={onBack}>
          <ArrowLeft size={16} />
          Kembali
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            {
              date: '15 Maret 2024',
              doctor: 'dr. Iqbal A.',
              diagnosis: 'Flu dan Batuk',
              treatment: 'Antibiotik, Obat Batuk'
            },
            {
              date: '1 Februari 2024',
              doctor: 'dr. Iqbal A.',
              diagnosis: 'Demam',
              treatment: 'Paracetamol'
            }
          ].map((visit, i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold">{visit.date}</span>
                <span className="text-gray-600">{visit.doctor}</span>
              </div>
              <div className="space-y-1">
                <p><span className="font-medium">Diagnosis:</span> {visit.diagnosis}</p>
                <p><span className="font-medium">Pengobatan:</span> {visit.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientHistory;
