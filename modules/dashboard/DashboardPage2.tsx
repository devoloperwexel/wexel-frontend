"use client";

import Achievements from "@/components/ui/Achievements";
import AppointmentsNew from "@/components/ui/AppointmentsNew";
import EventCard from "@/components/ui/EventCard";
import InformationSection from "@/components/ui/InformationSection";
import MedicalScreeningCard2 from "@/components/ui/MedicalScreeningCard2";
import MyPlan from "@/components/ui/MyPlan";
import ProgressBar from "@/components/ui/ProgressBar";
import SessionCard from "@/components/ui/SessionCard";
import TreatmentGoals from "@/components/ui/TreatmentGoals";

export default function DashboardPage() {
  const totalDays = 4;
  const completedDays = 1;
  const eventData = {
    physioName: "Physio's name",
    eventTitle: "Initial talk",
    eventDate: "12.08.2024",
    eventTime: "09:00 AM",
    duration: "30 Min",
  };
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
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-color mb-6">
          Dashboard
        </h2>
      </div>
      <div className="flex flex-wrap w-full gap-x-8">
        {/* Medical Screening */}
        <div className="w-full sm:w-[48%] lg:w-[20%] mb-6">
          <MedicalScreeningCard2 />
        </div>

        {/* Session Card */}
        <div className="w-full sm:w-[48%] lg:w-[20%] mb-6">
          <SessionCard
            totalSessions={data2.totalSessions}
            usedSessions={data2.usedSessions}
          />
        </div>

        {/* Event Card */}
        <div className="w-full sm:w-[48%] lg:w-[20%] mb-6">
          <EventCard
            physioName={eventData.physioName}
            eventTitle={eventData.eventTitle}
            eventDate={eventData.eventDate}
            eventTime={eventData.eventTime}
            duration={eventData.duration}
          />
        </div>

        {/* AppointmentsNew (wider section) */}
        <div className="w-full sm:w-[48%] lg:w-[30%] mb-6">
          <AppointmentsNew />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-x-8 lg:mt-0">
        <div className="w-full lg:w-1/2 ">
          <TreatmentGoals data={data} totalHours={2.5} timeFrame="1 Week" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col">
          <Achievements hours={2} reps={8} totalReps={10} />
          <ProgressBar totalDays={totalDays} completedDays={completedDays} />
        </div>
      </div>
      <div className="w-full lg:w-1/4 mt-[40px] ml-auto">
        <div className="relative w-full mt-[30px]">
          <InformationSection />
        </div>
      </div>
      <div className="w-full mt-6 lg:mt-0 pr-0 lg:pr-[1000px] relative">
        <MyPlan />
      </div>
    </>
  );
}
