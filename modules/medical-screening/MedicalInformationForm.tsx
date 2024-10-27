"use client";

import React, { useState, useEffect } from "react";

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

interface MedicalInformationFormProps {
  onComplete: () => void;
}

const MedicalInformationForm: React.FC<MedicalInformationFormProps> = ({
  onComplete,
}) => {
  const initialData: MedicalInfo = {
    dateOfBirth: "12-09-2022",
    gender: "",
    height: "00",
    heightUnit: "cm",
    weight: "00",
    weightUnit: "Kg",
    occupation: "Student",
    sportsActivities: "Lorem ipsum",
  };

  const [formData, setFormData] = useState<MedicalInfo>(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormComplete = () => {
    const requiredFields: (keyof MedicalInfo)[] = [
      "dateOfBirth",
      "gender",
      "height",
      "heightUnit",
      "weight",
      "weightUnit",
      "occupation",
      "sportsActivities"
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
    console.log(formData);
    onComplete(); // Handle data submission
  };

  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center">
        <div className="xl:w-[70%] md:w-full w-full ">
          <form onSubmit={handleSubmit}>
            <div className="sm:space-y-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-10 gap-x-0 gap-y-4 ">
                <div>
                  <label className="block text-sm font-medium">
                    Date of birth *
                  </label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md  p-[12px] text-[#020202]/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Biological gender *
                  </label>
                  <div className="mt-1 flex space-x-4 w-full bg-white border border-gray-300 rounded-md  p-[12px] justify-between items-center px-4">
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
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-10 gap-x-0 gap-y-4 ">
                <div>
                  <label className="block text-sm font-medium">Height</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md  p-[12px] text-[#020202]/50"
                    />
                    <div className="flex items-center ml-2 space-x-2 ">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="heightUnit"
                          value="cm"
                          checked={formData.heightUnit === "cm"}
                          onChange={handleUnitChange}
                          className="form-radio"
                        />
                        <span className="ml-1">cm</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="heightUnit"
                          value="in"
                          checked={formData.heightUnit === "in"}
                          onChange={handleUnitChange}
                          className="form-radio"
                        />
                        <span className="ml-1">in</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md  p-[12px] text-[#020202]/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Weight</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md  p-[12px] text-[#020202]/50"
                    />
                    <div className="flex items-center ml-2 space-x-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="weightUnit"
                          value="Kg"
                          checked={formData.weightUnit === "Kg"}
                          onChange={handleUnitChange}
                          className="form-radio"
                        />
                        <span className="ml-1">Kg</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="weightUnit"
                          value="lbs"
                          checked={formData.weightUnit === "lbs"}
                          onChange={handleUnitChange}
                          className="form-radio"
                        />
                        <span className="ml-1">lbs</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    List of sports and/or activities you participate in:
                  </label>
                  <textarea
                    name="sportsActivities"
                    value={formData.sportsActivities}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md  p-[12px] text-[#020202]/50"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MedicalInformationForm;
