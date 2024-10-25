"use client";

import Link from "next/link";
import React, { FC, useState } from "react";

// interface LoginFormProps {

// }

const LoginForm: FC = ({}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <form className="h-[543px] w-[480px] space-y-6">
        <h1 className="font-bold text-[48px] text-center mb-4">Log In</h1>
        <div>
          <label htmlFor="" className="text-[16px]">
            Username*
          </label>
          <input
            type="text"
            className="border border-black w-full h-[48px] focus:outline-none p-2"
          />
        </div>

        <div className="">
          <label htmlFor="" className="text-[16px]">
            Password*
          </label>

          <div className="relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              className="border border-black w-full h-[48px] focus:outline-none p-2"
              placeholder=""
            />
            {showPassword ? (
              <div
                className="cursor-pointer absolute top-4 right-3"
                onClick={() => setShowPassword((toggle) => !toggle)}
              >
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
              </div>
            ) : (
              <div
                className="cursor-pointer absolute top-3 right-3"
                onClick={() => setShowPassword((toggle) => !toggle)}
              >
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
              </div>
            )}
          </div>
        </div>

        <button className="w-full h-[48px] bg-black text-white hover:bg-opacity-80 transition-all">
          Log In
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
