export default interface DoctorDetail {
  id: string;
  name: string;
  specialty: string;
  hourlyRate:number;
  description?: string;
  profileImageUrl: string;
}
