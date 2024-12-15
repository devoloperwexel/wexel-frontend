import API from "constants/appointment";
import PATIENT_API from "constants/patient";
import ANSWERS_API from "constants/answers";
import DashboardPage1 from "modules/dashboard/DashboardPage1";
import DashboardPage2 from "modules/dashboard/DashboardPage2";
import { notFound, redirect } from "next/navigation";
import { auth } from "utils/auth";
import request from "utils/request";

export default async function page() {
  const authRes = await auth();
  try {
    await request(PATIENT_API.GET_PATIENT, {
      userId: authRes?.user.id,
    });
  } catch (e) {
    if ((e as any).message.statusCode === 404) {
      return redirect("/medical-screening");
    }
  }
  //
  try {
    const answerResults = await request(ANSWERS_API.GET_ANSWERS, {
      userId: authRes?.user.id,
    });

    const appointment = await request(API.GET_APPOINTMENTS, {
      userId: authRes?.user.id,
      query: "limit=10",
    });

    const date = answerResults?.data?.results?.[0]?.updatedAt;
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    const readableDate = date
      ? new Intl.DateTimeFormat("en-US", options).format(new Date(date))
      : undefined;

    return appointment.data.totalResults < 1 ? (
      <DashboardPage1
        answerCount={answerResults.data.totalResults}
        screeningCreatedAt={readableDate}
      />
    ) : (
      <DashboardPage2
        answerCount={answerResults.data.totalResults}
        screeningCreatedAt={readableDate}
      />
    );
  } catch (e) {
    console.log(e);

    notFound();
  }
}
