"use client";

import React from "react";

interface MedicalInformationInFormProps {
  formik: any;
}

const MedicalInformationInForm: React.FC<MedicalInformationInFormProps> = ({ formik }) => {

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center">
        <div className="xl:w-[70%] md:w-full w-full">
          <form onSubmit={formik.handleSubmit}>
            <div className="sm:space-y-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-10 gap-x-0 gap-y-4">
              
                <div>
                  <label className="block text-sm font-medium">
                    Biological gender *
                  </label>
                  <div className="mt-1 flex space-x-4 w-full bg-white border border-gray-300 rounded-md p-[12px] justify-between items-center px-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="biologicalGender"
                        value="MALE"
                        checked={formik.values.biologicalGender === "MALE"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-radio"
                      />
                      <span className="ml-2">Male</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="biologicalGender"
                        value="FEMALE"
                        checked={formik.values.biologicalGender === "FEMALE"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-radio"
                      />
                      <span className="ml-2">Female</span>
                    </label>
                  </div>
                  {formik.touched.gender && formik.errors.gender && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.gender}
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-10 gap-x-0 gap-y-4">
                <div>
                  <label className="block text-sm font-medium">Height (cm) *</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="height"
                      value={formik.values.height}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                    />
                    {formik.touched.height && formik.errors.height && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.height}
                      </div>
                    )}
                
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">Occupation *</label>
                  <input
                    type="text"
                    name="occupation"
                    value={formik.values.occupation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                  />
                  {formik.touched.occupation && formik.errors.occupation && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.occupation}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium">Weight (kg) *</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="weight"
                      value={formik.values.weight}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-[12px] text-[#020202]/50"
                    />
                    {formik.touched.weight && formik.errors.weight && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.weight}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    List of sports and/or activities you participate in:
                  </label>
                  <textarea
                    name="activities"
                    value={formik.values.activities}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-[12px] text-[#020202]/50"
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

export default MedicalInformationInForm;
