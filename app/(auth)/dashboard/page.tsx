import API from "constants/doctor";
import DashboardPage1 from "modules/dashboard/DashboardPage1";
import DashboardPage2 from "modules/dashboard/DashboardPage2";
import DashboardPage from "modules/dashboard/deplicated/DashboardPage";
import FormWizard from "modules/medical-screening/FormWizard";
import MedicalInformationForm from "modules/medical-screening/MedicalInformationForm";
import ProfileForm from "modules/medical-screening/ProfileForm";
import { notFound } from "next/navigation";
import request from "utils/request";

export default async function page() {
  try {
    // const doctorDetails = await request(API.GET_DOCTORS, {}, false, false);

    return <ProfileForm />;
  } catch (e) {
    console.log(e);
    notFound();
  }
}



