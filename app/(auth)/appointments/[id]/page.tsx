import AppointmentPageView from "modules/appointments/AppointmentPageView";

export default function page() {
  const appointment = {
    id: "8djb3zYA",
    videoCallUrl: "https://videocall.example.com/apt1",
    appointmentTime: "2024-08-10T14:00:00Z",
    doctorDetail: {
      id: "4JtPzXaB",
      name: "John Doe",
      specialty: "Physiotherapist",
      hourlyRate: 20,
      profileImageUrl: "https://online-learning-college.com/wp-content/uploads/2023/01/Qualifications-to-Become-a-Doctor--scaled.jpg",
    },
    note: "Patient has a history of heart disease.",
    createdAt: "2024-08-01T08:00:00Z",
    updatedAt: "2024-08-01T08:00:00Z",
  };
  return <AppointmentPageView appointment={appointment} />;
}
