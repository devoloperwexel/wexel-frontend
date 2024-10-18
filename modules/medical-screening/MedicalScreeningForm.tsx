"use client";

import React from "react";

const MedicalScreeningForm: React.FC = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F5F5]">
      <div className="max-w-3xl m-auto">
        <button className="text-black mb-4 text-[15px] font-semibold">&lt; -- Back</button>
        <h1 className="text-2xl font-bold text-primary-color">Welcome</h1>
        <h2 className="text-xl font-semibold mb-6">Create your Profile</h2>
        <div className="flex mb-6 items-center">
          <button className="bg-[#319F43] text-white text-[20px] font-bold py-2.5 px-3 rounded-full">✔</button>
          <div className="h-[2px] w-[170px] bg-primary-color"></div>
          <button className="bg-[#319F43] text-white text-[20px] font-bold py-2.5 px-3 rounded-full">✔</button>
          <div className="h-[2px] w-[170px] bg-primary-color"></div>
          <button className="bg-primary-color text-white py-2 px-4 rounded">
            3. Medical Screening
          </button>
        </div>
        <h2 className="text-[18px] font-semibold text-primary-color mb-2">Medical screening</h2>
        <div className="mb-4 space-y-2">
            <p className="text-[15px] font-semibold">Quality Care with Transparency</p>
            <p className="text-[13px]">At WexelCode, we prioritize quality and fairness.</p>
            <p className="text-[13px]">Our physios are dedicated to providing the right treatment for you, ensuring you only pay for what you need.</p>
        </div>
        <div className="mb-6 space-y-2">
            <p className="text-[15px] font-semibold">Commitment to Excellence</p>
            <p className="text-[13px]">We adhere to the highest standards of medical screening to determine the best care plan.</p>
            <p className="text-[13px]">Complete your profile after our thorough screening to ensure our services are suitable for you.</p>
            <p className="text-[13px]">If not, we&apos;ll recommend a specialized doctor.</p>
        </div>
        <div className="flex justify-center space-x-7 w-full">
            <button className="text-primary-color">Remind me later</button>
            <button className="bg-primary-color text-white py-2 px-4 rounded">Start Screening now</button>
        </div>
      </div>
    </div>
  );
};

export default MedicalScreeningForm;
