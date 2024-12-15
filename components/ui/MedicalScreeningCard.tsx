"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

type Props = {
  date: string;
  status: string;
  result: string;
};

export default function MedicalScreeningCard({date, status, result}:Props) {
  const router = useRouter();

  const goToScreening = () => {
    router.push("/medical-screening/questionnaire"); 
  };

  return (
    <div className="bg-white rounded-2xl px-6  pb-4 flex flex-col justify-between shadow-md h-full">
      <div className="flex flex-col items-start space-y-2 sm:space-y-7">
        <h2 className="text-[18px] sm:text-[22px] font-semibold text-primary-color pt-3">Medical screening</h2>
        
        <h2 className="text-[16px] sm:text-xl font-semibold text-black">Date: {date}</h2>
        <h2 className="text-[16px] sm:text-xl font-semibold text-black">Status: {status}</h2>
        <h2 className="text-[16px] sm:text-xl font-semibold text-[#D81FDB]">Result: {result}</h2>
      </div>

      <div className="w-full bottom-0">
        <button 
          className="w-full bg-primary-color rounded-md hover:bg-red-700 font-light text-white text-[15px] sm:text-[19px] py-[5px]  mt-4 sm:mt-[50px] lg:mt-0"
          onClick={goToScreening}
        >
          Go to screening
        </button>
      </div>
    </div>
  );
}


