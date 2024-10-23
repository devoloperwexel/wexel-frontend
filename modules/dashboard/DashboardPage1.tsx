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

export default function DashboardPage1() {
  return (
    <div className="flex flex-col gap-10 sm:gap-16 ">
      <div className="flex flex-col md:flex-col lg:flex-row gap-10 md:gap-20 w-full 2xl:w-[70%] xl:w-[80%]">
        <div className="flex-1">
          <MedicalScreeningCard />
        </div>
        <div className="flex-1">
          <Calender />
        </div>
      </div>
      <div className="flex-1 w-full md:w-full lg:w-[85%] ">
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
  );
}



