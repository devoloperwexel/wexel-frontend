"use client"

import Achievements from "@/components/ui/Achievements";
import Calender from "@/components/ui/Calender";
import InformationSection from "@/components/ui/InformationSection";
import MedicalScreeningCard from "@/components/ui/MedicalScreeningCard";
import TreatmentGoals from "@/components/ui/TreatmentGoals";

const data = {
  labels: ["Min", "Hr", "Min", "Hrs"],
  datasets: [
    {
      data: [10, 60, 20, 60],
      backgroundColor: ["#1AB0B0", "#FF844B", "#F85C7F", "#8676FE"],
    },
  ],
};

const data2 = {
  totalSessions: 3,
  usedSessions: 2,
};

export default function DashboardPage() {
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-color mb-6">
          Dashboard
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6">
        <div className="flex-2 w-full xl:w-1/3 lg:w-1/2">
          <MedicalScreeningCard />
        </div>
        <div className="flex-2 w-full xl:w-1/3 lg:w-1/2">
          <Calender />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full pt-6">
        <div className="flex-2 w-full xl:w-2/3 lg:w-3/3">
          <InformationSection />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 pt-6">
        <div className="flex-2 w-full xl:w-[45%] lg:w-1/2">
          <TreatmentGoals data={data} totalHours={2.5} timeFrame=" 1 Week" />
        </div>
        <div className="flex-2 w-full xl:w-1/3 lg:w-1/2">
          <Achievements hours={2} reps={8} totalReps={10} />
        </div>
      </div>
    </div>
  );
}
