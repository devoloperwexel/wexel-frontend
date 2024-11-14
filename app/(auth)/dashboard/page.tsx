import API from "constants/doctor";
import DashboardPage1 from "modules/dashboard/DashboardPage1";
import DashboardPage2 from "modules/dashboard/DashboardPage2";
import DashboardPage3 from "modules/dashboard/DashboardPage3";
import DashboardPage from "modules/dashboard/deplicated/DashboardPage";
import MedicalInformationForm from "modules/medical-screening/MedicalInformationInForm";
import PersonalInformationForm from "modules/medical-screening/PersonalInformationForm";
import ProfileForm from "modules/medical-screening/ProfileForm";
import QuestionMainSection from "modules/medical-screening/QuestionMainSection";
import PatientDetail from "modules/Patients/PatientDetail";
import PatientsCardList from "modules/Patients/PatientsCardList";
import { notFound } from "next/navigation";
import request from "utils/request";

export default async function page() {
  try {
    // const doctorDetails = await request(API.GET_DOCTORS, {}, false, false);

    return <PatientDetail name={""} age={0} gender={""} languages={[]} screeningResult={""} dateOfBirth={""} salutation={""} lastAppointment={""} nextAppointment={""} email={""} weight={""} height={""} activityLevel={""} />;
  } catch (e) {
    console.log(e);
    notFound();
  }
}
