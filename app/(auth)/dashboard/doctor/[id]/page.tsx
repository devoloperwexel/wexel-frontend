import DoctorViewPage from "modules/dashboard/doctors/DoctorViewPage";

export default function page() {
  const doctorDetail = {
    id: "1",
    name: "John Smith",
    specialty: "Physiotherapist",
    profileImageUrl:
      "https://online-learning-college.com/wp-content/uploads/2023/01/Qualifications-to-Become-a-Doctor--scaled.jpg",
    description:
      "John is an experienced physiotherapist specializing in sports injuries and rehabilitation.",
    hourlyRate: 50,
  };
  return <DoctorViewPage doctorDetail={doctorDetail} />;
}
