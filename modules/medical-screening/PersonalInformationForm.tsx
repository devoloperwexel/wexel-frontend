"use client";

import React, { useState, useEffect } from "react";

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
}

interface PersonalInformationFormProps {
  onComplete: () => void;
}

const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({
  onComplete,
}) => {
  const initialData: PersonalInfo = {
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    mobile: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
  };

  const [formData, setFormData] = useState<PersonalInfo>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Check if all required fields are filled
  const isFormComplete = () => {
    const requiredFields: (keyof PersonalInfo)[] = [
      "firstName",
      "lastName",
      "gender",
      "mobile",
      "zipCode",
      "city",
      "country",
    ];
    return requiredFields.every((field) => formData[field] !== "");
  };

  // Call onComplete if form is complete
  useEffect(() => {
    if (isFormComplete()) {
      onComplete();
    }
  }, [formData, onComplete]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    onComplete();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center">
        <div className="xl:w-[70%] md:w-full w-full ">
          <form onSubmit={handleSubmit}>
            <div className="sm:space-y-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 sm:gap-y-8 gap-y-4">
                <div>
                  <label className="block text-[18px] font-medium">
                    First name/s *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full border-[1px] border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[18px] font-medium">
                    Last name/s *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full border-[1px] border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 w-full">
                <label className="block text-[18px] font-medium">Gender</label>
                <div className="mt-1 flex space-x-4 w-full bg-white rounded-md border border-gray-400 p-[12px] justify-between items-center px-4 sm:gap-x-16 gap-x-0">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-10 gap-x-0 gap-y-4">
                {[
                  "phone",
                  "mobile",
                  "address",
                  "zipCode",
                  "city",
                  "country",
                ].map((field) => (
                  <div key={field}>
                    <label className="block text-[18px] font-medium">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                      {field !== "phone" && field !== "address" ? " *" : ""}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md p-[12px] text-[#020202]/50 border-[1px] border-gray-300"
                      required={field !== "phone" && field !== "address"}
                    />
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

export default PersonalInformationForm;
