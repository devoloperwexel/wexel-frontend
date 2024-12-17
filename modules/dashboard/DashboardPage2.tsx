"use client";

import Achievements from "@/components/ui/Achievements";
import AppointmentsNew from "@/components/ui/AppointmentsNew";
import EventCard from "@/components/ui/EventCard";
import InformationSection from "@/components/ui/InformationSection";
import MedicalScreeningCard from "@/components/ui/MedicalScreeningCard";

import MyPlan from "@/components/ui/MyPlan";
import ProgressBar from "@/components/ui/ProgressBar";
import Reminder from "@/components/ui/Reminder";
import SessionCard from "@/components/ui/SessionCard";
import TreatmentGoals from "@/components/ui/TreatmentGoals";

type Props = {
  answerCount: number;
  screeningCreatedAt?: string;
};

export default function DashboardPage2({
  answerCount,
  screeningCreatedAt,
}: Props) {
  const totalDays = 4;
  const completedDays = 1;
  const eventData = {
    physioName: "Physio's name",
    eventTitle: "Initial talk",
    eventDate: "12.08.2024",
    eventTime: "09:00 AM",
    duration: "30 Min",
    title: `Today's Events`,
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
  console.log(answerCount);

  return (
    <>
      <div>
        <h1 className="text-[20px] sm:text-[32px] font-bold text-primary-color py-3 px-8 sm:px-10 sm:py-10 h- mt-4">
          Dashboard
        </h1>
      </div>
      <Reminder isMedicalScreeningComplete={answerCount > 25} />
      <div className="flex flex-col gap-5 sm:gap-12 px-8 sm:px-10 ">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <div className=" flex flex-row gap-4">
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

              <EventCard
                physioName={eventData.physioName}
                eventTitle={eventData.eventTitle}
                eventDate={eventData.eventDate}
                eventTime={eventData.eventTime}
                duration={eventData.duration}
                title={eventData.title}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                {/* <TreatmentGoals
                  data={data}
                  totalHours={2.5}
                  timeFrame="1 Week"
                /> */}
                <SessionCard
                  totalSessions={data2.totalSessions}
                  usedSessions={data2.usedSessions}
                />
              </div>
              {/* <div className="flex-1 space-y-4">
                <Achievements hours={2} reps={8} totalReps={10} />
                <ProgressBar
                  totalDays={totalDays}
                  completedDays={completedDays}
                />
              </div> */}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 lg:w-1/2">
            <AppointmentsNew />
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <MyPlan />
          </div>
          <div className="lg:col-span-2">
            <InformationSection />
          </div>
        </div> */}
      </div>
    </>
  );
}
