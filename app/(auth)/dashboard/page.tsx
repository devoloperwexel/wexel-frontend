import API from "constants/doctor";
import DashboardPage from "modules/dashboard/DashboardPage";
import { notFound } from "next/navigation";
import request from "utils/request";

export default async function page() {
  try {
    const doctorDetails = await request(API.GET_DOCTORS, {}, false, false);
    console.log(doctorDetails);
    
    return <DashboardPage doctorDetails={doctorDetails?.data?.results} />;
  } catch (e) {
    console.log(e);
    notFound();
  }
}
