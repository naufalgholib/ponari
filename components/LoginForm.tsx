// @/components/LoginForm
"use client";

import Link from "next/link";
import React, { FC, useState } from "react";
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username wajib diisi')
    .min(5, 'Username minimal 5 karakter')
    .max(20, 'Username maksimal 20 karakter')
    .matches(/^[a-zA-Z0-9]+$/, 'Username hanya boleh mengandung huruf dan angka')
    .matches(/^\S*$/, 'Username tidak boleh mengandung spasi'),
  password: yup
    .string()
    .required('Password wajib diisi')
    .min(8, 'Password minimal 8 karakter')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Password harus mengandung minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan 1 karakter spesial (!@#$%^&*)'
    )
});

const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // If validation passes, you can proceed with your login logic here
      console.log('Form submitted successfully:', formData);
      // Add your login API call here
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="h-[543px] w-[480px] space-y-6">
        <h1 className="font-bold text-[48px] text-center mb-4">Log In</h1>
        
        <div>
          <label htmlFor="username" className="text-[16px] block mb-1">
            Username*
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className={`border ${
              errors.username ? 'border-red-500' : 'border-black'
            } w-full h-[48px] focus:outline-none p-2`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="text-[16px] block mb-1">
            Password*
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              className={`border ${
                errors.password ? 'border-red-500' : 'border-black'
              } w-full h-[48px] focus:outline-none p-2`}
            />
            <div
              className="cursor-pointer absolute top-3 right-3"
              onClick={() => setShowPassword(prev => !prev)}
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
          className={`w-full h-[48px] bg-black text-white ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-80'
          } transition-all`}
        >
          {isSubmitting ? 'Logging in...' : 'Log In'}
        </button>
      </form>

      <Link
        href="/forgot-password"
        className="underline text-[16px] text-center -mt-32"
      >
        Forgot your password?
      </Link>
    </section>
  );
};

export default LoginForm;