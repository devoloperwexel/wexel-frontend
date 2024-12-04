import API from "constants/questionnaires";
import QuestionMainSection from "modules/medical-screening/QuestionMainSection";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import request from "utils/request";

const title = "WexelCode - Medical Screening";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
const Questionnaire = async () => {
  try {
    const questionnaireResults = await request(API.GET_QUESTIONNAIRES, {
      query: "limit=10",
    });

    return (
      <QuestionMainSection
        questionnaires={questionnaireResults?.data?.results}
      />
    );
  } catch (e) {
    console.log(e);
    notFound();
  }
};

export default Questionnaire;
