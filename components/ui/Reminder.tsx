"use client";

import { useRouter } from "next/navigation";

type Props = {
  isMedicalScreeningComplete: boolean;
};
const Reminder = ({ isMedicalScreeningComplete }: Props) => {
  const router = useRouter();

  const goToScreening = () => {
    router.push("/medical-screening/questionnaire");
  };
  return (
    <div>
      {!isMedicalScreeningComplete && (
        <div className="bg-[#ECD0CF] p-4  text-center text-2xl flex justify-between items-center w-full">
          <div className="flex">
            <p className="font-black text-black mr-2">Reminder :</p>
            <p className="font-medium ">
              Finish the Medical screening to use full service functionality
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="w-full bg-primary-color rounded-md hover:bg-red-700 font-light text-white text-[15px] sm:text-[19px] py-[5px] px-16"
              onClick={goToScreening}
            >
              Go to screening
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reminder;
