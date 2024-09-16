import PaymentSuccessPageView from "modules/dashboard/doctors/payment/PaymentSuccess";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { id: string } }) {
  try {
    return <PaymentSuccessPageView appointmentId={params?.id}/>;
  } catch (e) {
    console.log(e);
    notFound();
  }
}
