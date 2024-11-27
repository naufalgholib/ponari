"use client";

import React, { useState } from 'react';
import Link from "next/link";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AlertCircle, X } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertTitle } from '@mui/material';

// Validation schema using Yup
const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nama wajib diisi')
    .min(3, 'Nama minimal 3 karakter'),
  
  role: Yup.string()
    .required('Role wajib dipilih'),
  
  city: Yup.string()
    .required('Kota wajib diisi'),
  
  address: Yup.string()
    .required('Alamat wajib diisi'),
  
  gender: Yup.string()
    .required('Jenis kelamin wajib dipilih'),
  
  phoneNumber: Yup.string()
    .required('Nomor telepon wajib diisi')
    .matches(/^(\+62|62|0)[0-9]{9,12}$/, 'Format nomor telepon tidak valid'),
  
  nik: Yup.string()
    .required('NIK wajib diisi')
    .length(16, 'NIK harus 16 digit'),
  
  email: Yup.string()
    .required('Email wajib diisi')
    .email('Format email tidak valid')
});

const RegisterNewStaff = () => {
  const [showAlert, setShowAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      role: '',
      city: '',
      address: '',
      gender: '',
      phoneNumber: '',
      nik: '',
      email: ''
    },
    validationSchema: registrationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Form submitted:', values);
      setShowAlert(true);
      resetForm();
      setTimeout(() => setShowAlert(false), 3000);
    }
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Tambah Staff Baru</CardTitle>
          <button 
            className="hover:bg-gray-100 rounded-full p-2"
            onClick={() => console.log('Close modal')}
          >
            <Link href="/dashboard-as-admin" className="flex items-center">
              <X className="h-5 w-5" />
            </Link>
          </button>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {showAlert && (
              <Alert className="bg-green-50 text-green-700 border-green-200">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>
                  Data staff berhasil ditambahkan!
                </AlertTitle>
              </Alert>
            )}

            <div className="grid grid-cols-2 gap-4">
              {/* Role Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Role <span className="text-red-500">*</span>
                </label>
                <Select 
                  value={formik.values.role} 
                  onValueChange={(value) => formik.setFieldValue('role', value)}
                >
                  <SelectTrigger className={formik.errors.role && formik.touched.role ? 'border-red-500' : ''}>
                    <SelectValue>
                      {formik.values.role 
                        ? (formik.values.role === 'dokter' ? 'Dokter' : 'Resepsionis')
                        : 'Pilih role'}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dokter">Dokter</SelectItem>
                    <SelectItem value="resepsionis">Resepsionis</SelectItem>
                  </SelectContent>
                </Select>
                {formik.errors.role && formik.touched.role && (
                  <p className="text-red-500 text-xs">{formik.errors.role}</p>
                )}
              </div>

              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border rounded-md ${
                    formik.errors.name && formik.touched.name 
                    ? 'border-red-500' 
                    : 'border-gray-200'
                  }`}
                  placeholder="Masukkan nama lengkap"
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="text-red-500 text-xs">{formik.errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border rounded-md ${
                    formik.errors.email && formik.touched.email 
                    ? 'border-red-500' 
                    : 'border-gray-200'
                  }`}
                  placeholder="contoh@ponari.com"
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-500 text-xs">{formik.errors.email}</p>
                )}
              </div>

              {/* NIK Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  NIK <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nik"
                  value={formik.values.nik}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border rounded-md ${
                    formik.errors.nik && formik.touched.nik 
                    ? 'border-red-500' 
                    : 'border-gray-200'
                  }`}
                  placeholder="Masukkan 16 digit NIK"
                  maxLength={16}
                />
                {formik.errors.nik && formik.touched.nik && (
                  <p className="text-red-500 text-xs">{formik.errors.nik}</p>
                )}
              </div>

              {/* Gender Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Jenis Kelamin <span className="text-red-500">*</span>
                </label>
                <Select 
                  value={formik.values.gender} 
                  onValueChange={(value) => formik.setFieldValue('gender', value)}
                >
                  <SelectTrigger className={
                    formik.errors.gender && formik.touched.gender 
                    ? 'border-red-500' 
                    : ''
                  }>
                    <SelectValue>
                      {formik.values.gender 
                        ? (formik.values.gender === 'male' ? 'Laki-laki' : 'Perempuan')
                        : 'Pilih jenis kelamin'}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Laki-laki</SelectItem>
                    <SelectItem value="female">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
                {formik.errors.gender && formik.touched.gender && (
                  <p className="text-red-500 text-xs">{formik.errors.gender}</p>
                )}
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border rounded-md ${
                    formik.errors.phoneNumber && formik.touched.phoneNumber 
                    ? 'border-red-500' 
                    : 'border-gray-200'
                  }`}
                  placeholder="Contoh: 08123456789"
                />
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <p className="text-red-500 text-xs">{formik.errors.phoneNumber}</p>
                )}
              </div>

              {/* City Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Kota <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border rounded-md ${
                    formik.errors.city && formik.touched.city 
                    ? 'border-red-500' 
                    : 'border-gray-200'
                  }`}
                  placeholder="Masukkan nama kota"
                />
                {formik.errors.city && formik.touched.city && (
                  <p className="text-red-500 text-xs">{formik.errors.city}</p>
                )}
              </div>
            </div>

            {/* Address Input - Full Width */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Alamat Lengkap <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded-md ${
                  formik.errors.address && formik.touched.address 
                  ? 'border-red-500' 
                  : 'border-gray-200'
                }`}
                placeholder="Masukkan alamat lengkap"
                rows={3}
              />
              {formik.errors.address && formik.touched.address && (
                <p className="text-red-500 text-xs">{formik.errors.address}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => console.log('Cancel')}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Link href="/dashboard-as-admin" className="flex items-center">
                  Batal
                </Link>
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              >
                Simpan
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterNewStaff;