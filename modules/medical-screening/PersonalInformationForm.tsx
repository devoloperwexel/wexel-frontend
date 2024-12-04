"use client";

import React, { useState } from "react";
import FlagSelect from "react-flags-select";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  mobile: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  options: string;
}

interface PersonalInformationInFormProps {
  formik: any;
}

const PersonalInformationInForm: React.FC<PersonalInformationInFormProps> = ({ formik }) => {
  const [selectedCountry, setSelectedCountry] = useState(formik.values.country);

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    formik.setFieldValue("country", countryCode);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center">
        <div className="xl:w-[70%] md:w-full w-full">
          <form onSubmit={formik.handleSubmit}>
            <div className="sm:space-y-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 sm:gap-y-8 gap-y-4">
                {/* First Name */}
                <div>
                  <label className="block text-[18px] font-medium">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 block w-full border-[1px] border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                    required
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-[18px] font-medium">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 block w-full border-[1px] border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                    required
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
                  )}
                </div>
              </div>

              {/* Gender */}
              <div className="grid grid-cols-1 w-full">
                <label className="block text-[18px] font-medium">Gender</label>
                <div className="mt-1 flex space-x-4 w-full bg-white rounded-md border border-gray-400 p-[12px] justify-between items-center px-4 sm:gap-x-16 gap-x-0">
                  {/* Gender Options */}
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formik.values.gender === "Male"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-radio"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formik.values.gender === "Female"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-radio"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formik.values.gender === "Other"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-radio"
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
                {formik.touched.gender && formik.errors.gender && (
                  <div className="text-red-500 text-sm">{formik.errors.gender}</div>
                )}
              </div>

              {/* Country Field with Flag Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-10 gap-x-0 gap-y-4">
                <div>
                  <label className="block text-[18px] font-medium">Country</label>
                  <FlagSelect
                    selected={selectedCountry}
                    onSelect={handleCountryChange}
                    className="w-full mt-1 rounded-md bg-white text-[#020202]/50 h-[54%] border-[1px] border-gray-300"
                  />
                  {formik.touched.country && formik.errors.country && (
                    <div className="text-red-500 text-sm">{formik.errors.country}</div>
                  )}
                </div>
                {["city"].map((field) => (
                  <div key={field}>
                    <label className="block text-[18px] font-medium">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={formik.values[field as keyof PersonalInfo]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-1 block w-full rounded-md p-[12px] text-[#020202]/50 border-[1px] border-gray-300"
                      required={field !== "phone" && field !== "address"}
                    />
                    {formik.touched[field as keyof PersonalInfo] && formik.errors[field as keyof PersonalInfo] && (
                      <div className="text-red-500 text-sm">{formik.errors[field as keyof PersonalInfo]}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Other Fields (mobile, address, etc.) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-10 gap-x-0 gap-y-4">
                {["mobile", "language", "address", "zipCode"].map((field) => (
                  <div key={field}>
                    <label className="block text-[18px] font-medium">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={formik.values[field as keyof PersonalInfo]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-1 block w-full rounded-md p-[12px] text-[#020202]/50 border-[1px] border-gray-300"
                      required={field !== "phone" && field !== "address"}
                    />
                    {formik.touched[field as keyof PersonalInfo] && formik.errors[field as keyof PersonalInfo] && (
                      <div className="text-red-500 text-sm">{formik.errors[field as keyof PersonalInfo]}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationInForm;
