import DashboardPage from "modules/dashboard/DashboardPage";

const doctorDetails = [
  {
    id: "1",
    name: "John Smith",
    specialty: "Physiotherapist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "John is an experienced physiotherapist specializing in sports injuries and rehabilitation.",
    hourlyRate: 20,
  },
  {
    id: "2",
    name: "Emily Johnson",
    specialty: "Physiotherapist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Emily focuses on pediatric physiotherapy and has a passion for helping children with mobility issues.",
    hourlyRate: 20,
  },
  {
    id: "3",
    name: "Michael Brown",
    specialty: "Physiotherapist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1590608897129-79b24f3375f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Michael specializes in geriatric physiotherapy, helping elderly patients improve their mobility and quality of life.",
    hourlyRate: 20,
  },
  {
    id: "4",
    name: "Sarah Davis",
    specialty: "Physiotherapist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Sarah is a dedicated physiotherapist who excels in post-operative care and rehabilitation.",
    hourlyRate: 20,
  },
  {
    id: "5",
    name: "James Wilson",
    specialty: "Physiotherapist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "James has extensive experience in treating musculoskeletal disorders and chronic pain management.",
    hourlyRate: 20,
  },
  {
    id: "6",
    name: "Jessica Martinez",
    specialty: "Physiotherapist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1586201375761-83865001d699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Jessica specializes in women's health physiotherapy, focusing on prenatal and postnatal care.",
    hourlyRate: 20,
  },
  {
    id: "7",
    name: "David Anderson",
    specialty: "Physiotherapist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1593021133279-196c49138a9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "David is a sports physiotherapist with a focus on injury prevention and athletic performance enhancement.",
    hourlyRate: 20,
  },
  {
    id: "8",
    name: "Laura Thomas",
    specialty: "Physiotherapist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Laura has a background in neurological physiotherapy, working with patients recovering from strokes and brain injuries.",
    hourlyRate: 20,
  },
  {
    id: "9",
    name: "Daniel Taylor",
    specialty: "Physiotherapist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1582552958098-009ccc89db68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Daniel specializes in manual therapy techniques and is known for his patient-centered approach.",
    hourlyRate: 20,
  },
  {
    id: "10",
    name: "Mary White",
    specialty: "Physiotherapist",
    profileImageUrl:
      "https://images.unsplash.com/photo-1589156286621-adefab6ef7c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Mary is passionate about helping patients regain their strength and mobility after injuries.",
    hourlyRate: 20,
  },
];


export default function page() {
  return <DashboardPage doctorDetails={doctorDetails} />;
}
