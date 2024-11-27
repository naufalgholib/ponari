"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const patientSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must not exceed 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "Only letters and spaces are allowed")
    .required("Full name is required"),

  idNumber: yup
    .string()
    .matches(/^\d{16}$/, "Must be exactly 16 digits")
    .required("ID Number is required"),

  dateOfBirth: yup
    .date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required"),

  gender: yup
    .string()
    .oneOf(["male", "female"], "Please select a valid gender")
    .required("Gender is required"),

  phone: yup
    .string()
    .matches(/^(08|\+62)\d{8,11}$/, "Must start with '08' or '+62' and be 10-13 digits")
    .required("Phone number is required"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  address: yup
    .string()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address must not exceed 200 characters")
    .required("Address is required"),

  city: yup
    .string()
    .min(2, "City must be at least 2 characters")
    .max(50, "City must not exceed 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "Only letters and spaces are allowed")
    .required("City is required"),

  emergencyContact: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "Only letters and spaces are allowed")
    .required("Emergency contact name is required"),

  emergencyPhone: yup
    .string()
    .matches(/^(08|\+62)\d{8,11}$/, "Must start with '08' or '+62' and be 10-13 digits")
    .required("Emergency phone number is required"),

  insuranceType: yup
    .string()
    .oneOf(["bpjs", "private", "none"], "Please select a valid insurance type")
    .required("Insurance type is required"),

  insuranceNumber: yup
    .string()
    .matches(/^\d{16}$/, "Must be exactly 16 digits")
    .notRequired()
    .nullable(),
});

type PatientFormData = yup.InferType<typeof patientSchema>;

const RegisterNewPatientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PatientFormData>({
    resolver: yupResolver(patientSchema),
  });

  const insuranceType = watch("insuranceType");

  const onSubmit = (data: PatientFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4" >
            <button className="p-2 bg-transparent border-none cursor-pointer" >
              <Link href="/dashboard-as-receptionist" className="flex items-center">
                <ArrowLeft className="h-5 w-5" />
              </Link> 
            </button>
            <h1 className="text-2xl font-semibold">Register New Patient</h1>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block font-medium">
                    Full Name
                  </label>
                  <input
                    {...register("fullName")}
                    id="fullName"
                    placeholder="Enter full name"
                    className={`w-full p-2 border rounded ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="idNumber" className="block font-medium">
                    ID Number (NIK)
                  </label>
                  <input
                    {...register("idNumber")}
                    id="idNumber"
                    placeholder="Enter NIK"
                    className={`w-full p-2 border rounded ${
                      errors.idNumber ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.idNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.idNumber.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="dateOfBirth" className="block font-medium">
                    Date of Birth
                  </label>
                  <input
                    {...register("dateOfBirth")}
                    type="date"
                    id="dateOfBirth"
                    className={`w-full p-2 border rounded ${
                      errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm">
                      {errors.dateOfBirth.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="gender" className="block font-medium">
                    Gender
                  </label>
                  <select
                    {...register("gender")}
                    id="gender"
                    className={`w-full p-2 border rounded ${
                      errors.gender ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-sm">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-medium">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    id="phone"
                    placeholder="Enter phone number"
                    className={`w-full p-2 border rounded ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    className={`w-full p-2 border rounded ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Address and City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="address" className="block font-medium">
                    Address
                  </label>
                  <input
                    {...register("address")}
                    id="address"
                    placeholder="Enter full address"
                    className={`w-full p-2 border rounded ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="city" className="block font-medium">
                    City
                  </label>
                  <input
                    {...register("city")}
                    id="city"
                    placeholder="Enter city"
                    className={`w-full p-2 border rounded ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="emergencyContact"
                    className="block font-medium"
                  >
                    Emergency Contact Name
                  </label>
                  <input
                    {...register("emergencyContact")}
                    id="emergencyContact"
                    placeholder="Enter emergency contact name"
                    className={`w-full p-2 border rounded ${
                      errors.emergencyContact
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.emergencyContact && (
                    <p className="text-red-500 text-sm">
                      {errors.emergencyContact.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="emergencyPhone" className="block font-medium">
                    Emergency Contact Phone
                  </label>
                  <input
                    {...register("emergencyPhone")}
                    id="emergencyPhone"
                    placeholder="Enter emergency contact phone"
                    className={`w-full p-2 border rounded ${
                      errors.emergencyPhone
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.emergencyPhone && (
                    <p className="text-red-500 text-sm">
                      {errors.emergencyPhone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Insurance Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="insuranceType" className="block font-medium">
                    Insurance Type
                  </label>
                  <select
                    {...register("insuranceType")}
                    id="insuranceType"
                    className={`w-full p-2 border rounded ${
                      errors.insuranceType
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select insurance type</option>
                    <option value="bpjs">BPJS</option>
                    <option value="private">Private Insurance</option>
                    <option value="none">None</option>
                  </select>
                  {errors.insuranceType && (
                    <p className="text-red-500 text-sm">
                      {errors.insuranceType.message}
                    </p>
                  )}
                </div>

                {insuranceType !== "none" && (
                  <div className="space-y-2">
                    <label
                      htmlFor="insuranceNumber"
                      className="block font-medium"
                    >
                      Insurance Number
                    </label>
                    <input
                      {...register("insuranceNumber")}
                      id="insuranceNumber"
                      placeholder="Enter insurance number"
                      className={`w-full p-2 border rounded ${
                        errors.insuranceNumber
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.insuranceNumber && (
                      <p className="text-red-500 text-sm">
                        {errors.insuranceNumber.message}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition-colors"
                >
                  Register Patient
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterNewPatientForm;
