"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {
  NotificationsOutlined as BellIcon,
  LogoutOutlined as LogoutIcon,
  PersonOutlined as UserIcon,
  HomeOutlined as HomeIcon,
  ListOutlined as ListIcon,
  ChatOutlined as ChatIcon,
} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";

const drawerWidth = "w-64 sm:w-72";

export const DashboardLayout2 = () => {
  const session = useSession();
  const user = session.data?.user;
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState("EN");

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

  return (
    <div className="flex h-screen bg-primary-color/5 z-50">
      {/* AppBar */}
      <div
        className={`fixed top-0 justify-between w-full ${
          open ? "w-full lg:w-[calc(100%)] md:w-[calc(100%)]" : "w-full z-1"
        } transition-all duration-300 bg-white z-50`}
      >
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-10 z-50">
          {/* Title */}
          <div className="flex items-center space-x-4 md:space-x-6 ml-[70px] md:ml-[300px] z-20">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold z-50">
              {` Hi, ${user?.name}`}
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
              <Avatar
                sx={{
                  bgcolor: "#9e9b9b",
                  width: 36,
                  height: 36,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {user.name[0].toUpperCase()}
              </Avatar>
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
      ></main>
    </div>
  );
};
