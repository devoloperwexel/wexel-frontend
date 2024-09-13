"use client";
import React from "react";
//
import Hero from "./partials/hero";
import Management from "./partials/management";
import Features from "./partials/features";
import AppReview from "./partials/app-review";
import Pricing from "./partials/pricing";
import Testmonial from "./partials/testmonial";

import { Box, Container, styled, Typography } from "@mui/material";
import ContainedButton from "@/components/ui/ContainedButton";
import Banner from "./components/Banner";
import HowItWorks from "./components/HowItWorks";
import WeMakeDifferent from "./components/WeMakeDifferent";
import DetailsBanner from "./components/DetailsBanner";
import GetStarted from "./components/GetStarted";
import SneakPeek from "./components/SneakPeek";
import Image from "next/image";
import Link from "next/link";
import Blog from "./components/Blog";
import InstagramSVG from "@/components/icons/InstagramSvg";
import LinkedinSvg from "@/components/icons/LinkedinSvg";
import Faq from "./components/Faq";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <WeMakeDifferent />
      <DetailsBanner />
      <GetStarted />
      <SneakPeek />
      <Blog />
      <Faq />
    </div>
  );
};

export default Home;
