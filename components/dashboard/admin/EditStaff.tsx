"use client";

import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Lock, TrashIcon } from 'lucide-react';

interface Staff {
  name: string;
  role: 'Dokter' | 'Resepsionis';
  email: string;
  status: 'Aktif' | 'Nonaktif';
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nama tidak boleh kosong'),
  role: Yup.string().oneOf(['Dokter', 'Resepsionis']).required('Role harus dipilih'),
  email: Yup.string().email('Email tidak valid').required('Email harus diisi'),
  status: Yup.string().oneOf(['Aktif', 'Nonaktif']).required('Status harus dipilih'),
});

const StaffEditForm: React.FC = () => {
  const [formData] = useState<Staff>({
    name: '',
    role: 'Dokter',
    email: '',
    status: 'Aktif',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Staff>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    // Add logic to save the updated staff data
    console.log('Saving staff data:', formData);
    setShowSuccessMessage(true);
  };

  const handleResetPassword = () => {
    // Add logic to reset staff password
    console.log('Resetting password for:', formData.name);
  };

  const handleDeleteStaff = () => {
    // Add logic to delete staff
    console.log('Deleting staff:', formData.name);
  };

  const handleCancel = () => {
    // Navigate back to the dashboard
    console.log('Cancelling changes and returning to the dashboard');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Staff</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Form fields */}
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`border rounded px-3 py-2 w-full ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block font-medium mb-1">
              Role
            </label>
            <select
              id="role"
              {...register('role')}
              className={`border rounded px-3 py-2 w-full ${errors.role ? 'border-red-500' : ''}`}
            >
              <option value="">Select a role</option>
              <option value="Dokter">Dokter</option>
              <option value="Resepsionis">Resepsionis</option>
            </select>
            {errors.role && <p className="text-red-500">{errors.role.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`border rounded px-3 py-2 w-full ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block font-medium mb-1">
              Status
            </label>
            <select
              id="status"
              {...register('status')}
              className={`border rounded px-3 py-2 w-full ${errors.status ? 'border-red-500' : ''}`}
            >
              <option value="">Select a status</option>
              <option value="Aktif">Aktif</option>
              <option value="Nonaktif">Nonaktif</option>
            </select>
            {errors.status && <p className="text-red-500">{errors.status.message}</p>}
          </div>
          {/* Other form fields */}
          <div className="flex justify-between items-center">
            {/* Reset Password, Delete Staff, Cancel, and Save buttons */}
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={handleResetPassword}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded flex items-center space-x-2"
              >
                <Lock size={16} />
                <span>Reset Password</span>
              </button>
              <button
                type="button"
                onClick={handleDeleteStaff}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded flex items-center space-x-2"
              >
                <TrashIcon size={16} />
                <span>Delete Staff</span>
              </button>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded"
              >
                <Link href="/dashboard-as-admin">Cancel</Link>
                
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </form>
        {showSuccessMessage && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Staff information saved successfully.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StaffEditForm;
