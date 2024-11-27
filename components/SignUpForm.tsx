"use client";

import React, { FC, useState } from "react";
import * as yup from "yup";

interface FormData {
  username: string;
  nik: string;
  email: string;
  password: string;
}

const validationSchema = yup.object({
  username: yup
    .string()
    .required("Username wajib diisi")
    .min(5, "Username minimal 5 karakter")
    .max(20, "Username maksimal 20 karakter")
    .matches(/^[a-zA-Z0-9]+$/, "Username hanya boleh mengandung huruf dan angka")
    .matches(/^\S*$/, "Username tidak boleh mengandung spasi"),
  nik: yup
    .string()
    .required("NIK wajib diisi")
    .matches(/^\d{16}$/, "NIK harus berupa 16 digit angka"),
  email: yup
    .string()
    .required("Email wajib diisi")
    .email("Format email tidak valid (contoh: nama@domain.com)"),
  password: yup
    .string()
    .required("Password wajib diisi")
    .min(8, "Password minimal 8 karakter")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password harus mengandung minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 karakter spesial (!@#$%^&*)"
    ),
});

const SignUpForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    nik: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // For NIK field, only allow numeric input
    if (name === 'nik' && !/^\d*$/.test(value)) {
      return;
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Validate single field on change
    try {
      await validationSchema.validateAt(name, { [name]: value });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrors((prev) => ({
          ...prev,
          [name]: error.message,
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      
      // If validation passes
      setSubmitStatus('success');
      setFormData({
        username: "",
        nik: "",
        email: "",
        password: "",
      });
      setErrors({});
      
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors: { [key: string]: string } = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
        setErrors(newErrors);
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }

    // Clear status after 3 seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 3000);
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      {submitStatus === 'success' && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg">
          Pendaftaran berhasil!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded shadow-lg">
          Gagal mendaftar. Periksa kembali data Anda.
        </div>
      )}

      <form className="h-[543px] w-[480px] space-y-6" onSubmit={handleSubmit}>
        <h1 className="font-bold text-[48px] text-center mb-4">Sign Up</h1>
        
        <div>
          <label htmlFor="username" className="text-[16px] block">
            Username*
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            maxLength={20}
            className={`border ${
              errors.username ? "border-red-500" : "border-black"
            } w-full h-[48px] focus:outline-none p-2`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        <div>
          <label htmlFor="nik" className="text-[16px] block">
            NIK*
          </label>
          <input
            type="text"
            id="nik"
            name="nik"
            value={formData.nik}
            onChange={handleChange}
            maxLength={16}
            className={`border ${
              errors.nik ? "border-red-500" : "border-black"
            } w-full h-[48px] focus:outline-none p-2`}
          />
          {errors.nik && (
            <p className="text-red-500 text-sm mt-1">{errors.nik}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-[16px] block">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border ${
              errors.email ? "border-red-500" : "border-black"
            } w-full h-[48px] focus:outline-none p-2`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="text-[16px] block">
            Password*
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`border ${
                errors.password ? "border-red-500" : "border-black"
              } w-full h-[48px] focus:outline-none p-2`}
            />
            <div
              className="cursor-pointer absolute top-3 right-3"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9996 10.222C12.2269 10.222 13.2218 9.22714 13.2218 7.99981C13.2218 6.77248 12.2269 5.77759 10.9996 5.77759C9.77223 5.77759 8.77734 6.77248 8.77734 7.99981C8.77734 9.22714 9.77223 10.222 10.9996 10.222Z"
                    stroke="black"
                    strokeWidth="1.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 7.99992C18.9016 11.3233 15.1314 14.6666 11 14.6666C6.86856 14.6666 3.0984 11.3233 1 7.99992C3.55394 4.84242 6.54626 1.33325 11 1.33325C15.4538 1.33325 18.4461 4.84236 21 7.99992Z"
                    stroke="black"
                    strokeWidth="1.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L21 24.1373"
                    stroke="black"
                    strokeWidth="1.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33339 10.8687C8.98761 11.3218 8.77783 11.9172 8.77783 12.5691C8.77783 13.9888 9.77272 15.1399 11.0001 15.1399C11.5636 15.1399 12.0782 14.8972 12.4699 14.4972"
                    stroke="black"
                    strokeWidth="1.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.8465 6.86279C3.9778 8.37774 2.42104 10.5361 1 12.5686C3.0984 16.4132 6.86856 20.281 11 20.281C12.7221 20.281 14.3816 19.609 15.8832 18.5467"
                    stroke="black"
                    strokeWidth="1.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 4.8562C15.4538 4.8562 18.4461 8.91576 21 12.5686C20.6461 13.2168 20.2448 13.8658 19.8022 14.4967"
                    stroke="black"
                    strokeWidth="1.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full h-[48px] bg-black text-white hover:bg-opacity-80 transition-all ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Mendaftar...' : 'Sign Up'}
        </button>
      </form>
    </section>
  );
};

export default SignUpForm;