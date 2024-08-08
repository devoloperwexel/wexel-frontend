import { Grid } from "@mui/material";
import { AppointmentCard } from "./AppointmentCard";

const appointments = [
  {
    id: "8djb3zYA",
    videoCallUrl: "https://videocall.example.com/apt1",
    appointmentTime: "2024-08-10T14:00:00Z",
    doctorDetail: {
      id: "4JtPzXaB",
      name: "John Doe",
      specialty: "Physiotherapist",
      profileImageUrl: "https://example.com/images/doc1.jpg",
    },
    note: "Patient has a history of heart disease.",
    createdAt: "2024-08-01T08:00:00Z",
    updatedAt: "2024-08-01T08:00:00Z",
  },
  {
    id: "3sPa1fK9",
    videoCallUrl: "https://videocall.example.com/apt2",
    appointmentTime: "2024-08-11T15:30:00Z",
    doctorDetail: {
      id: "9cNp4a6W",
      name: "Jane Smith",
      specialty: "Physiotherapist",
      profileImageUrl: "https://example.com/images/doc2.jpg",
    },
    createdAt: "2024-08-02T09:00:00Z",
    updatedAt: "2024-08-02T09:00:00Z",
  },
  {
    id: "7a3Bc5dH",
    videoCallUrl: "https://videocall.example.com/apt3",
    appointmentTime: "2024-08-12T10:00:00Z",
    doctorDetail: {
      id: "5kG4d3fL",
      name: "Emily Johnson",
      specialty: "Physiotherapist",
      profileImageUrl: "https://example.com/images/doc3.jpg",
    },
    note: "Follow-up on previous consultation.",
    createdAt: "2024-08-03T10:00:00Z",
    updatedAt: "2024-08-03T10:00:00Z",
  },
  {
    id: "6pD2j9dF",
    videoCallUrl: "https://videocall.example.com/apt4",
    appointmentTime: "2024-08-13T11:00:00Z",
    doctorDetail: {
      id: "8sK7l4cV",
      name: "Michael Brown",
      specialty: "Physiotherapist",
      profileImageUrl: "https://example.com/images/doc4.jpg",
    },
    createdAt: "2024-08-04T11:00:00Z",
    updatedAt: "2024-08-04T11:00:00Z",
  },
];

const Appointments = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {appointments.map((appointment) => (
        <Grid key={appointment.id} item xs={2} sm={43} md={3}>
          <AppointmentCard appointment={appointment} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Appointments;
