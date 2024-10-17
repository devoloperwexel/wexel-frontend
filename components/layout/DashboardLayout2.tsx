"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import MedicalScreening2 from "./MedicalScreening2";
import {
  NotificationsOutlined as BellIcon,
  LogoutOutlined as LogoutIcon,
  PersonOutlined as UserIcon,
  HomeOutlined as HomeIcon,
  ListOutlined as ListIcon,
  ChatOutlined as ChatIcon,
} from "@mui/icons-material";
import InformationSection from "./InformationSection";
import TreatmentGoals from "./TreatmentGoals";
import Achievements from "./Achievements";
import MyPlan from "./MyPlan";
import SessionCard from "./SessionCard";
import ProgressBar from "./ProgressBar";
import EventCard from "./EventCard";
import AppointmentsNew from "./AppointmentsNew";

const drawerWidth = "w-64 sm:w-72";

export const DashboardLayout2 = () => {
  const path = usePathname();
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState("EN");

  const totalDays = 4;
  const completedDays = 1;

  const eventData = {
    physioName: "Physio's name",
    eventTitle: "Initial talk",
    eventDate: "12.08.2024",
    eventTime: "09:00 AM",
    duration: "30 Min",
  };

  // Handle screen resizing to close the drawer on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  const menuItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <HomeIcon className="w-4 h-4" />,
    },
    {
      label: "Physios Profile",
      href: "/physios-profile",
      icon: <ChatIcon className="w-4 h-4" />,
    },
    {
      label: "My Appointments",
      href: "/appointments",
      icon: <ListIcon className="w-4 h-4" />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <UserIcon className="w-4 h-4" />,
    },
  ];

  const handleSignout = () => signOut({ callbackUrl: "/signin" });

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
    <div className="flex h-screen bg-primary-color/5">
      {/* AppBar */}
      <div
        className={`fixed top-0 justify-between w-full ${
          open ? "w-full lg:w-[calc(100%)] md:w-[calc(100%)]" : "w-full z-1"
        } transition-all duration-300 bg-white`}
      >
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-10">
          {/* Title */}
          <div className="flex items-center space-x-4 md:space-x-6 ml-[70px] md:ml-[300px]">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Hi, Stevan dux
            </h1>
          </div>
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Language Selector */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className="border border-gray-300 rounded p-1 sm:p-2 text-sm"
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="CH">CH</option>
              <option value="IN">IN</option>
            </select>

            {/* Notifications */}
            <button className="relative">
              <BellIcon className="w-5 sm:w-6 h-5 sm:h-6" />
              <span className="absolute top-0 right-0 h-2 sm:h-3 w-2 sm:w-3 bg-primary-color rounded-full"></span>
            </button>

            {/* Profile Avatar */}
            <button onClick={handleProfileMenuOpen}>
              <Image
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                src="https://i.pravatar.cc/300"
                alt="User Avatar"
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`flex flex-col fixed top-0 left-0 h-full bg-white border-r transition-all duration-300 ${
          open ? drawerWidth : "w-16 sm:w-20"
        }`}
      >
        <div className="flex items-center justify-center px-[10px] pt-8 pb-2 sm:px-[16px]">
          <Image src="/images/logo.png" alt="logo" width={120} height={80} />
        </div>

        {/* Menu items */}
        <ul className="flex flex-col space-y-4 py-4 justify-center items-start">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button className="rounded-sm flex items-start justify-center md:justify-start transform hover:rotate-x-[180] hover:border-l-4 hover:border-primary-color transition-transform duration-300 w-full">
                <a
                  href={item.href}
                  className="flex items-center font-bold space-x-3 ml-3 py-[10px] sm:py-[9px] px-3 md:px-10 hover:font-black hover:text-[15px] text-gray-700  sm:hover:bg-primary-color/10 hover:bg-transparent  hover:text-primary-color rounded-md w-full"
                >
                  {item.icon}
                  {open && <span>{item.label}</span>}
                </a>
              </button>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <button
          onClick={handleSignout}
          className="mt-[80%] flex items-start justify-center rounded-sm transform hover:rotate-x-[180] hover:border-l-4 hover:border-gray-400 transition-transform duration-300 w-full"
        >
          <a className="flex items-center font-extrabold space-x-3 mx-10  py-[10px] sm:py-[9px] px-3 md:px-10 hover:font-black hover:text-[15px] text-gray-700 hover:bg-gray-400/10 hover:text-gray-700 rounded-md">
            <LogoutIcon className="w-5 h-5" />
            {open && <span className="ml-2">Logout</span>}
          </a>
        </button>
      </div>

      <main
        className={`${
          open ? "ml-[300px] pt-10" : "ml-[70px] sm:ml-[90px]"
        } overflow-x-hidden w-full relative flex flex-col justify-start items-start px-4 sm:px-6 md:px-10 mt-[100px]`}
      >
        <div className="w-full flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-color mb-6">
            Dashboard
          </h2>
        </div>

        <div className="flex flex-wrap w-full gap-x-8">
          {/* Medical Screening */}
          <div className="w-full sm:w-[48%] lg:w-[20%] mb-6">
            <MedicalScreening2 />
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
      </main>
    </div>
  );
};
