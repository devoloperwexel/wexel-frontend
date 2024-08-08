import DoctorDetail from "./doctor-detail.model";

export default interface Appointment {
  id: string;
  videoCallUrl: string;
  appointmentTime: string;
  doctorDetail: DoctorDetail;
  note?: string;
  createdAt: string;
  updatedAt: string;
}
