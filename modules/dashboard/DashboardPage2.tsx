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

export default function DashboardPage2() {
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
    <div className="py-3">
      <div className="grid grid-cols-12 gap-6">
        {/* Top Section */}
        <div className="col-span-7 grid grid-cols-1 gap-6">
          {/* Medical Screening */}
          <div>
            <MedicalScreeningCard2 />
          </div>

          {/* Session Card */}
          <div>
            <SessionCard totalSessions={data2.totalSessions} usedSessions={data2.usedSessions} />
          </div>

          {/* Event Card */}
          <div>
            <EventCard
              physioName={eventData.physioName}
              eventTitle={eventData.eventTitle}
              eventDate={eventData.eventDate}
              eventTime={eventData.eventTime}
              duration={eventData.duration}
            />
          </div>
        </div>

        {/* AppointmentsNew (wider section) */}
        <div className="col-span-5">
          <AppointmentsNew />
        </div>

        {/* Bottom Section */}
        <div className="col-span-5">
          <MyPlan />
        </div>

        <div className="col-span-7 grid grid-cols-1 gap-6">
          {/* Treatment Goals Section */}
          <div>
            <TreatmentGoals data={data} totalHours={2.5} timeFrame="1 Week" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Achievements section */}
            <div>
              <Achievements hours={2} reps={8} totalReps={10} />
            </div>

            {/* Progress Bar Section */}
            <div>
              <ProgressBar totalDays={totalDays} completedDays={completedDays} />
            </div>
          </div>

          {/* Information Section */}
          <div>
            <InformationSection />
          </div>
        </div>
      </div>
    </div>
  );
}



