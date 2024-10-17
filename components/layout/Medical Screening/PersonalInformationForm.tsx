"use client";

import React, { useState } from "react";

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

const PersonalInformationForm: React.FC = () => {
  const initialData: PersonalInfo = {
    firstName: "Julia",
    lastName: "Müller",
    gender: "Female",
    phone: "+49 123 456789", // Corrected placeholder phone
    mobile: "+49 987 654321", // Corrected placeholder mobile
    address: "123 Main St.", // Corrected placeholder address
    zipCode: "80000",
    city: "Munich",
    country: "Germany",
  };

  const [formData, setFormData] = useState<PersonalInfo>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Handle data submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F5F5]">
      <div className="max-w-3xl m-auto">
        <button className="text-black mb-4 text-[15px] font-semibold">&lt; -- Back</button>
        <h1 className="text-2xl font-bold text-primary-color">Welcome</h1>
        <h2 className="text-xl font-semibold mb-6">Create your Profile</h2>
        <div className="flex mb-6 items-center">
          <button className="bg-primary-color text-white py-2 px-4 rounded">
            1. Personal Information
          </button>
          <div className="h-[2px] w-[50px] bg-primary-color/50"></div>
          <button className="bg-primary-color/50 text-white py-2 px-4 rounded">
            2. Medical Information
          </button>
          <div className="h-[2px] w-[50px] bg-primary-color"></div>
          <button className="bg-primary-color/50 text-white py-2 px-4 rounded">
            3. Medical Screening
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First name/s *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last name/s *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 w-full mt-4">
            <label className="block text-sm font-medium">Gender</label>
            <div className="mt-1 flex space-x-4 w-full bg-white border-gray-300 rounded-md shadow-sm p-2 justify-between items-center px-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Mobile *</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Zip code *</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50"
                required
              />
            </div>
          </div>
          <div className="mt-6 flex justify-between space-x-6 w-full">
            <button
              type="button"
              className="bg-transparent border-[1px] border-primary-color text-primary-color py-2 px-4 rounded w-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-400 text-white py-2 px-4 rounded w-full"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformationForm;
