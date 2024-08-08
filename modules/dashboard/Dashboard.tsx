import SearchBox from "@/components/ui/SearchBox";
import { DoctorDetailCard } from "./DoctorDetailsCard";
import { Box, Grid } from "@mui/material";

const doctorDetails = [
  {
    id: "1",
    name: "John Smith",
    specialty: "Cardiologist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "2",
    name: "Emily Johnson",
    specialty: "Dermatologist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "3",
    name: "Michael Brown",
    specialty: "Neurologist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1590608897129-79b24f3375f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "4",
    name: "Sarah Davis",
    specialty: "Pediatrician",
    profileImageUrl:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "5",
    name: "James Wilson",
    specialty: "Orthopedic Surgeon",
    profileImageUrl:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "6",
    name: "Jessica Martinez",
    specialty: "Psychiatrist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1586201375761-83865001d699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "7",
    name: "David Anderson",
    specialty: "Oncologist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1593021133279-196c49138a9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "8",
    name: "Laura Thomas",
    specialty: "Gynecologist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "9",
    name: "Daniel Taylor",
    specialty: "Gastroenterologist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1582552958098-009ccc89db68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "10",
    name: "Mary White",
    specialty: "Endocrinologist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1589156286621-adefab6ef7c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

export default function Dashboard() {
  return (
    <>
      <Box marginBottom={5}>
        <SearchBox />
      </Box>
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {doctorDetails.map((doctorDetail) => (
          <Grid key={doctorDetail.id} item xs={2} sm={43} md={3}>
            <DoctorDetailCard doctorDetail={doctorDetail} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
