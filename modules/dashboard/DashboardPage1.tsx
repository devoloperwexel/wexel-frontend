"use client";

import Achievements from "@/components/ui/Achievements";
import Calender from "@/components/ui/Calender";
import InformationSection from "@/components/ui/InformationSection";
import MedicalScreeningCard from "@/components/ui/MedicalScreeningCard";
import TreatmentGoals from "@/components/ui/TreatmentGoals";
import Reminder from "@/components/ui/Reminder";

const data = {
  labels: ["Min", "Hr", "Min", "Hrs"],
  datasets: [
    {
      data: [10, 60, 20, 60],
      backgroundColor: ["#1AB0B0", "#FF844B", "#F85C7F", "#8676FE"],
    },
  ],
};

type Props = {
  answerCount: number;
  screeningCreatedAt?: string;
};

export default function DashboardPage1({
  answerCount,
  screeningCreatedAt,
}: Props) {
  return (
    <>
      <div>
        <h1 className="text-[20px] sm:text-[32px] font-bold text-primary-color py-3 px-8 sm:px-10 sm:py-10">
          Dashboard
        </h1>
      </div>
      <Reminder isMedicalScreeningComplete={answerCount > 25} />

      <div className="flex flex-col gap-10 sm:gap-12 px-8 sm:px-10 my-10">
        <div className="flex flex-col md:flex-col lg:flex-row gap-10 md:gap-20 w-full 2xl:w-[70%] xl:w-[80%]">
          <div className="flex-1">
            {answerCount > 25 ? (
              <MedicalScreeningCard
                status="Completed"
                date={screeningCreatedAt!}
                result="N/A"
              />
            ) : (
              <MedicalScreeningCard
                status="In Complete"
                date="N/A"
                result="N/A"
              />
            )}
          </div>
          <div className="flex-1">
            <Calender />
          </div>
        </div>
        <div className="flex-1 w-full md:w-full lg:w-[85%]">
          <InformationSection />
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row gap-10 sm:gap-16">
          <div className="flex-1">
            <TreatmentGoals data={data} totalHours={2.5} timeFrame="1 Week" />
          </div>
          <div className="flex-1">
            <Achievements hours={2} reps={8} totalReps={10} />
          </div>
        </div>
      </div>
    </>
  );
}
