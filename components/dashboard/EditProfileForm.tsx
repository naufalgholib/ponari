import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonSaveForm from "./ButtonSaveForm";
import Overlay from "../Overlay";
import { format } from "date-fns";

type EditProfileFormProps = {
  onEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"),
    
  city: yup
    .string()
    .required("City is required")
    .min(2, "City must be at least 2 characters")
    .max(30, "City cannot exceed 30 characters")
    .matches(/^[A-Za-z\s]+$/, "City can only contain letters and spaces"),
    
    birthday: yup
    .date()
    .transform((value, originalValue) => 
      originalValue ? new Date(originalValue) : value
    )
    .required("Birthday is required")
    .max(new Date(), "Birthday cannot be in the future"),
    
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Please select a valid gender"),
    
  address: yup
    .string()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address cannot exceed 200 characters"),
    
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^(?:08|\+62)[0-9]{8,11}$/,
      "Phone number must start with '08' or '+62' and be 10-13 digits"
    ),
    
  nik: yup
    .string()
    .required("NIK is required")
    .matches(/^\d{16}$/, "NIK must be exactly 16 digits")
});

type FormData = yup.InferType<typeof schema>;

const EditProfileForm: FC<EditProfileFormProps> = ({ onEditProfile }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "John Doe",
      city: "Khorkiv",
      birthday: new Date("1992-11-10"),
      gender: "male",
      address: "Sonyachna str. 226B",
      phoneNumber: "0832223333",
      nik: "0913110129111111"
    }
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Overlay>
      <div className="relative h-[620px] w-[570px] bg-white rounded-[20px] p-10 overflow-y-scroll overflow-hidden">
        <div
          className="absolute right-10 top-7 cursor-pointer"
          onClick={() => onEditProfile(false)}
        >
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.12646 1.09961L10.4081 11.4231M19.6897 21.7466L10.4081 11.4231M10.4081 11.4231L19.6897 1.09961L1.12646 21.7466"
              stroke="black"
            />
          </svg>
        </div>

        <h2 className="text-center mt-2 mb-10 text-[32px]">Edit Profile</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-4">
              <label className="text-[12px] text-[#00000099] block">Name</label>
              <input
                type="text"
                {...register("name")}
                className="border-b border-[#0000006B] w-full focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <label className="text-[12px] text-[#00000099] block">City</label>
                <input
                  type="text"
                  {...register("city")}
                  className="border-b border-[#0000006B] w-[292px] focus:outline-none"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label className="text-[12px] text-[#00000099] block">Birthday</label>
                <input
                  type="date"
                  {...register("birthday")}
                  className="w-[160px] border-b border-[#0000006B] focus:outline-none"
                  max={format(new Date(), "yyyy-MM-dd")}
                />
                {errors.birthday && (
                  <p className="text-red-500 text-xs mt-1">{errors.birthday.message}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-[12px] text-[#00000099] block">Gender</label>
              <div className="flex items-center gap-6 mt-4 ml-4">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="male"
                    {...register("gender")}
                    className="h-[18px] w-[18px]"
                  />
                  <label>Male</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="female"
                    {...register("gender")}
                    className="h-[18px] w-[18px]"
                  />
                  <label>Female</label>
                </div>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[12px] text-[#00000099] block">Address</label>
              <input
                type="text"
                {...register("address")}
                className="border-b border-[#0000006B] w-full focus:outline-none"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[12px] text-[#00000099] block">Phone Number</label>
              <input
                type="text"
                {...register("phoneNumber")}
                className="border-b border-[#0000006B] w-full focus:outline-none"
                placeholder="08xxx or +62xxx"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[12px] text-[#00000099] block">NIK</label>
              <input
                type="text"
                {...register("nik")}
                className="border-b border-[#0000006B] w-full focus:outline-none"
                maxLength={16}
              />
              {errors.nik && (
                <p className="text-red-500 text-xs mt-1">{errors.nik.message}</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <ButtonSaveForm />
          </div>
        </form>
      </div>
    </Overlay>
  );
};

export default EditProfileForm;