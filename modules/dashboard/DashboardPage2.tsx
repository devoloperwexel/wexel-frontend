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
    // <div>
    //   <div className="flex flex-col md:flex-row gap-2">
    //     {/* Left column (60% width) */}
    //     <div className="w-full md:w-4/6 md:pr-4 ">
    //       {/* Top row (40% height) */}
    //       <div className="h-40 md:h-64 grid grid-cols-3 gap-4 mb-4">
    //         <div className="">
    //            <MedicalScreeningCard2 />
    //         </div>
    //         <div className="">
    //            <SessionCard totalSessions={data2.totalSessions} usedSessions={data2.usedSessions} />
    //         </div>
    //         <div className="">
    //            <EventCard
    //               physioName={eventData.physioName}
    //               eventTitle={eventData.eventTitle}
    //               eventDate={eventData.eventDate}
    //               eventTime={eventData.eventTime}
    //               duration={eventData.duration}
    //             />
    //         </div>
    //       </div>
    //       {/* Bottom row (60% height) */}
    //       <div className="h-60 md:h-96 flex flex-col-2 gap-4 pt-12 w-full">
    //         <div className="flex-1 w-2/3">
    //             <TreatmentGoals data={data} totalHours={2.5} timeFrame="1 Week" />
    //         </div>
    //         <div className="flex-1 w-1/3 flex-col gap-4 h-full ">
    //           <div className="h-[70%] flex-grow">
    //              <Achievements hours={2} reps={8} totalReps={10} />
    //           </div>
    //           <div className="h-[30%] flex-grow mt-16 pt-10">
    //              <ProgressBar totalDays={totalDays} completedDays={completedDays} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right column (40% width) */}
    //     <div className="w-full md:w-2/6">
    //       <div className="h-full">
    //          <AppointmentsNew />
    //       </div>
    //     </div>
    //   </div>

    //   {/* Bottom section */}
    //   <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
    //     <div className="col-span-3 md:col-span-1">
    //        <MyPlan />
    //     </div>
    //     <div className="col-span-3 md:col-span-2">
    //        <InformationSection />
    //     </div>
    //   </div>
    // </div>
    <div>
  <div className="flex flex-col md:flex-col lg:flex-row sm:flex-row gap-2">
    {/* Left column (100% width on mobile, 67% width on tablets and up) */}
    <div className="w-full lg:w-full sm:w-2/3 md:w-full xl:w-4/6 sm:pr-4 ">
      {/* Top row (stacked on mobile, grid on tablets and up) */}
      <div className="grid grid-cols-1 lg:grid-col-1 sm:grid-cols-1 xl:grid-cols-3 gap-4 mb-4 h-auto md:h-64">
        <div>
          <MedicalScreeningCard2 />
        </div>
        <div>
          <SessionCard totalSessions={data2.totalSessions} usedSessions={data2.usedSessions} />
        </div>
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

      {/* Bottom row (stacked on mobile, side-by-side on tablets and up) */}
      <div className="flex flex-col md:flex-col lg:flex-row sm:flex-row gap-4 pt-4 w-full">
        <div className="w-full lg:w-3/5">
          <TreatmentGoals data={data} totalHours={2.5} timeFrame="1 Week" />
        </div>
        <div className="w-full lg:w-2/5 flex flex-col gap-2 sm:gap-0">
          <div className="h-[70%]">
            <Achievements hours={2} reps={8} totalReps={10} />
          </div>
          <div className="h-[30%] my-4 sm:my-5">
            <ProgressBar totalDays={totalDays} completedDays={completedDays} />
          </div>
        </div>
      </div>
    </div>

    {/* Right column (100% width on mobile, 33% width on tablets and up) */}
    <div className="w-full sm:w-full lg:w-2/6">
      <div className="h-full">
        <AppointmentsNew />
      </div>
    </div>
  </div>

  {/* Bottom section (stacked on mobile, grid layout on tablets and up) */}
  <div className="mt-4 relative sm:mt-0 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 items-end">
    <div className="col-span-1 md:col-span-1">
      <MyPlan />
    </div>
    <div className="col-span-1 md:col-span-2">
      <InformationSection />
    </div>
  </div>
</div>


  );
}

