"use client";

import React, { useState } from "react";

interface MedicalInfo {
    dateOfBirth: string;
    gender: string;
    height: string;
    heightUnit: string;
    weight: string;
    weightUnit: string;
    occupation: string;
    sportsActivities: string;
}

const MedicalInformationForm: React.FC = () => {
    const initialData: MedicalInfo = {
        dateOfBirth: '12-09-2022',
        gender: 'Female',
        height: '00',
        heightUnit: 'cm',
        weight: '00',
        weightUnit: 'Kg',
        occupation: 'Student',
        sportsActivities: 'Lorem ipsum',
      };

  const [formData, setFormData] = useState<MedicalInfo>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };  

  const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <button className="bg-[#319F43] text-white text-[20px] font-bold py-2.5 px-3 rounded-full">✔</button>
          <div className="h-[2px] w-[125px] bg-primary-color"></div>
          <button className="bg-primary-color text-white py-2 px-4 rounded">
            2. Medical Information
          </button>
          <div className="h-[2px] w-[125px] bg-primary-color"></div>
          <button className="bg-primary-color/50 text-white py-2 px-4 rounded">
            3. Medical Screening
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium">Date of birth *</label>
            <input type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50" />
              
            </div>
            <div>
            <label className="block text-sm font-medium">Biological gender *</label>
            <div className="mt-1 flex space-x-4 w-full bg-white border-gray-300 rounded-md shadow-sm p-2 justify-between items-center px-4">
              <label className="flex items-center">
                <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="form-radio" />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} className="form-radio" />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div>
                <label className="block text-sm font-medium">Height</label>
                <div className="flex">
                <input type="text" name="height" value={formData.height} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50" />
                <div className="flex items-center ml-2 space-x-2">
                    <label className="flex items-center">
                    <input type="radio" name="heightUnit" value="cm" checked={formData.heightUnit === 'cm'} onChange={handleUnitChange} className="form-radio" />
                    <span className="ml-1">cm</span>
                    </label>
                    <label className="flex items-center">
                    <input type="radio" name="heightUnit" value="in" checked={formData.heightUnit === 'in'} onChange={handleUnitChange} className="form-radio" />
                    <span className="ml-1">in</span>
                    </label>
                </div>
                </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Occupation</label>
              <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50" />
            </div>
            <div>
            <label className="block text-sm font-medium">Weight</label>
            <div className="flex">
              <input type="text" name="weight" value={formData.weight} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50" />
              <div className="flex items-center ml-2 space-x-2">
                <label className="flex items-center">
                  <input type="radio" name="weightUnit" value="Kg" checked={formData.weightUnit === 'Kg'} onChange={handleUnitChange} className="form-radio" />
                  <span className="ml-1">Kg</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="weightUnit" value="lbs" checked={formData.weightUnit === 'lbs'} onChange={handleUnitChange} className="form-radio" />
                  <span className="ml-1">lbs</span>
                </label>
              </div>
            </div>
          </div>
            <div>
            <label className="block text-sm font-medium">List of sports and/or activities you participate in:</label>
            <textarea name="sportsActivities" value={formData.sportsActivities} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-[#020202]/50" />
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

export default MedicalInformationForm;
