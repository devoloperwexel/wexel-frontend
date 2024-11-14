import API from "constants/doctor";
import DashboardPage1 from "modules/dashboard/DashboardPage1";
import { notFound } from "next/navigation";
import request from "utils/request";

export default async function page() {
  try {
    // const doctorDetails = await request(API.GET_DOCTORS, {}, false, false);

    return <DashboardPage1/>;
  } catch (e) {
    console.log(e);
    notFound();
  }
}

