"use client";

import React, { useState } from "react";
import SectionsList from "./SectionsList";
import ProgressBar from "./ProgressBar";
import QuestionsSection from "./QuestionsSection";
import { useRouter } from "next/navigation";
import { FaFlag } from "react-icons/fa6";

type QuestionType = "RADIO" | "TEXTAREA" | "CHECKBOX" | "TOPIC_QUESTION";

interface Questions {
  id: string;
  requiredRef?: { id: string; value: string };
  questionText: string;
  info?: string;
  values?: string[];
  type: QuestionType;
}

interface MedicalScreeningCollection {
  title: string;
  questions: Questions[];
}

type Props = {
  questionnaires: MedicalScreeningCollection[];
};

const QuestionMainSection = ({ questionnaires }: Props) => {
  const [sections] = useState<MedicalScreeningCollection[]>([
    {
      title: "Treatment Goals",
      questions: [
        {
          id: "a1f4d5e7-2b84-4a4b-9d3a-fc13f1f2766c",
          questionText: "Do you smoke?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "b14c23e8-5a9b-486e-829c-df85a5c6b90a",
          questionText: "Do you exercise regularly?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "c9e5b7a6-8e51-49a7-89e5-d4c3fe7b601f",
          questionText: "If yes, write diagnose",
          type: "TEXTAREA",
          requiredRef: {
            id: "b14c23e8-5a9b-486e-829c-df85a5c6b90a",
            value: "Yes",
          },
        },
      ],
    },
    {
      title: "Current Condition",
      questions: [
        {
          id: "d5f7c9b2-8c3e-4a3e-bbe4-3b0c3e07c48f",
          questionText: "Are you currently suffering from pain?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "e71b32d5-3e5a-459e-9bda-6d15e2b4c29f",
          questionText:
            "<b>If yes</b>: has it worsened massively in the last 2 weeks?",
          type: "RADIO",
          values: ["Yes", "No"],
          requiredRef: {
            id: "d5f7c9b2-8c3e-4a3e-bbe4-3b0c3e07c48f",
            value: "Yes",
          },
        },
        {
          id: "f47e3b2a-5f7d-4b5d-9c8e-19e5f32b3a48",
          questionText: "Have you been to the doctor for clarification?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "g65b23f4-1b4e-49f8-8c3e-4b1d5a2c30b9",
          questionText: "If yes, write diagnose",
          type: "TEXTAREA",
          requiredRef: {
            id: "f47e3b2a-5f7d-4b5d-9c8e-19e5f32b3a48",
            value: "Yes",
          },
        },
        {
          id: "h28d5e9c-3e5b-48b5-9a3c-6c4d7e2b9a5f",
          questionText: "If you are a woman:> Are you pregnant?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Mental and Cognitive Health",
      questions: [
        {
          id: "i76b4a3c-1d5f-49e7-9a2e-5d9c4e1b6f3e",
          questionText:
            "Do you notice any concentration, memory, or other brain performance problems in yourself?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "j94c8d3b-5a2e-4e9b-8f3d-1d5a4c9e6b1f",
          questionText:
            "Do you suffer from unusual fatigue and/or irritability?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Mobility and Exercise",
      questions: [
        {
          id: "k25e9d4b-3a5f-4b8d-9c3e-5f1d2b9c7e3f",
          questionText:
            "Do you suffer from balance problems, gait problems, or do you sometimes fall?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "l84b7c5a-1e4d-49f3-9c5a-2e8d4f9c3b7a",
          questionText: "Do you have chest pain under any physical exertion?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "m32f1b9c-7d5a-49e3-8b4c-5f9a7c3e1d2b",
          questionText:
            "Do you get out of breath quickly with unreasonably low exertion?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "n47a8c2d-5f3b-4e7d-9c5a-1d9c4b2e7f8a",
          questionText:
            "Is there a sudden progressive loss of strength in the arms or legs?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Medications",
      questions: [
        {
          id: "97a5d866-1d8c-4972-9617-b29cbc44ed10",
          questionText:
            "Do you regularly take medication (e.g. blood thinning medication, birth control pills, etc.) ?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "f67f9a8c-6057-4130-8f47-8a2325a0d6d6",
          questionText: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q15", value: "Yes" },
        },
        {
          id: "3897f7bf-f33c-4003-ba0b-c3be65f78f2b",
          questionText:
            "Have you taken cortisone for more than 12 weeks in the last 5 years?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Chronic Conditions",
      questions: [
        {
          id: "506f6b3a-dbf8-4e28-8158-e5d519366fcb",
          questionText:
            "Do you regularly take medication (e.g. blood thinning medication, birth control pills, etc.) ?",
          type: "RADIO",
          values: ["Yes", "No"],
          info: `<ul class="list-disc list-inside">
      <li class="mb-1">First item with custom style</li>
      <li class="mb-1">Second item styled</li>
      <li class="mb-1">Third item styled</li>
    </ul>`,
        },
        {
          id: "90527a3f-0bb5-4250-a1be-35a20d9ed4d7",
          questionText: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q18", value: "Yes" },
        },
        {
          id: "c0e46884-1b8f-4dd4-b0e2-3b8a9a6ece74",
          questionText: "<b>Do you suffer from:</b>",
          values: [""],
          type: "TOPIC_QUESTION",
        },
        {
          id: "b78edfe2-37d7-4968-9d7a-bb4c91b77688",
          questionText: "High blood pressure >140/95 mmHg?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "155538e0-43e1-4e31-8f13-7fe92550c1c7",
          questionText: "Serious cardiovascular diseases?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "d5245e80-f88f-4525-868c-e0a38f0fe3a6",
          questionText:
            "Circulatory problems (e.g. PAVK, varicose veins or similar)?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "e42ba31a-c561-4ed0-81d2-6c4dfab9a0a1",
          questionText: "Osteoporosis or Osteopenia?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Surgical History",
      questions: [
        {
          id: "324fc790-c0f9-43cb-be9e-a89af535107f",
          questionText: "Have you had any surgery in the last five years?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "778b616f-d4c5-4723-8426-12bf6b2c71a3",
          questionText: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q25", value: "Yes" },
        },
        {
          id: "81121e6b-e5a3-47b6-8f15-3ec70c8c8f73",
          questionText:
            "Do you have a pacemaker or other external items in your body?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "4732a8dc-4fb6-4385-8655-dee1145e711c",
          questionText: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q27", value: "Yes" },
        },
      ],
    },
    {
      title: "Infectious Diseases",
      questions: [
        {
          id: "14b220cd-696c-4984-bcce-14cb8999ed17",
          questionText:
            "	Are there any known infectious diseases? (e.g. hepatitis, HIV, AIDS)",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "fb0f7186-b0dc-4023-a7c1-f77b479f0b0d",
          questionText: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q29", value: "Yes" },
        },
        {
          id: "a354b810-ab6c-4f3b-ae5c-6a3dc293181a",
          questionText:
            "Do you have a pacemaker or other external items in your body?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "ab87bcd6-04cb-4453-aff3-e1d01723c4f3",
          questionText: "If yes, which ones ?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q31", value: "Yes" },
        },
      ],
    },
    {
      title: "Health and Lifestyle Habits",
      questions: [
        {
          id: "65547667-4e28-4952-9398-5eb120af485c",
          questionText:
            "Have you lost over 10% of your body weight (severe weight loss) in the last 3 months?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "63bf05c1-3d11-4308-a9dc-7da544a9b75e",
          questionText: "Have you smoked in the past 7 years?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "aa6a5d99-48de-41d7-8240-293d9de92474",
          questionText: "If yes,How many cigarettes per day?",
          values: ["Yes", "No"],
          type: "TEXTAREA",
          requiredRef: { id: "q34", value: "Yes" },
        },
      ],
    },
    {
      title: "Other Health Concerns",
      questions: [
        {
          id: "771cdf04-db9c-4fd5-a0b1-0d9e50e5c2df",
          questionText: "Have you had any bone fractures in the last 5 years?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "830dc2c7-bdf7-4c50-97eb-c93f8fb2b0b3",
          questionText: "Do you have persistent hoarseness or unusual cough?",
          type: "RADIO",
          values: ["Yes", "No"],
        },
        {
          id: "08dec267-96e1-4c61-9140-3424b9ab7bce",
          questionText: "<b>Are there any health concerns like:</b>",
          type: "TOPIC_QUESTION",
          values: [""],
        },
        {
          id: "758123d0-e1a3-488c-96b9-f0b4d463305d",
          questionText: "<b>Do you suffer from:</b>",
          type: "TOPIC_QUESTION",
          values: [""],
        },
      ],
    },
  ]);

  const [selectedSection, setSelectedSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completedSections, setCompletedSections] = useState<boolean[]>(
    Array(sections.length).fill(false)
  );

  const [showCompletedView, setShowCompletedView] = useState(false);
  const [resultFlag, setResultFlag] = useState<"Green" | "Yellow" | "Red">(
    "Green"
  );
  const [status, setStatus] = useState<string>("In Progress");
  const [completionDate, setCompletionDate] = useState<Date | null>(null);

  const handleSelectSection = (index: number) => {
    setSelectedSection(index);
  };

  const handleToggleCompletion = (index: number) => {
    setCompletedSections((prev) => {
      const newCompletedSections = [...prev];
      newCompletedSections[index] = !newCompletedSections[index];

      if (newCompletedSections[index]) {
        setCompletionDate(new Date());
        setStatus("Completed");
      } else {
        setCompletionDate(null);
        setStatus("In Progress");
      }
      return newCompletedSections;
    });
  };

  const handleAnswerChange = (id: string, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer,
    }));
  };

  const areAllQuestionsAnswered = () => {
    const currentQuestions = sections[selectedSection].questions;

    return currentQuestions.every((question) => {
      if (question.type === "TOPIC_QUESTION") {
        return true;
      }
      if (question.requiredRef) {
        const requiredAnswer = answers[question.requiredRef.id];
        if (requiredAnswer !== question.requiredRef.value) {
          return true;
        }
      }
      return answers[question.id] !== undefined;
    });
  };

  const evaluateResultFlag = () => {
    let hasRedFlag = false;
    let hasGreenFlag = false;

    for (const id in answers) {
      const answer = answers[id];
      if (answer === "Yes") {
        hasRedFlag = true;
      } else if (answer === "No") {
        hasGreenFlag = true;
      }
    }

    if (hasRedFlag) {
      setResultFlag("Red");
    } else if (hasGreenFlag) {
      setResultFlag("Green");
    } else {
      setResultFlag("Yellow");
    }
  };

  const handleNext = () => {
    if (areAllQuestionsAnswered()) {
      handleToggleCompletion(selectedSection);

      if (selectedSection < sections.length - 1) {
        setSelectedSection(selectedSection + 1);
      } else {
        evaluateResultFlag();
        setShowCompletedView(true);
      }
    } else {
      alert("Please answer all required questions.");
    }
  };

  const handleBack = () => {
    if (selectedSection > 0) {
      setSelectedSection(selectedSection - 1);
    }
  };

  // Medical Screening Completed View
  const MedicalScreeningCompleted = () => {
    const router = useRouter();

    const goToMakeAppointment = () => {
      router.push("/physios");
    };

    return (
      <div className="p-4 bg-white">
        <h1 className="text-xl font-medium mb-4 text-black/70">
          Your Progress
        </h1>
        <ProgressBar
          completedSections={
            completedSections.filter((completed) => completed).length
          }
          totalSections={sections.length}
        />
        <div className=" flex flex-col justify-center items-center h-[500px] space-y-10 ">
          <div className="flex flex-col items-center justify-center space-y-10 ">
            <p className="text-[32px] font-black text-primary-color">
              Medical screening completed
            </p>
            <div className=" space-y-5">
              <p className="text-[20px] font-semibold text-black">
                Date:{" "}
                {completionDate
                  ? completionDate.toString()
                  : "No date available"}
              </p>
              <p className="text-[20px] font-semibold text-black">
                Status: {status}
              </p>
              <p
                className={`text-[20px] font-semibold text-[#D81FDB] flex items-center ${
                  resultFlag === "Green"
                    ? "text-green-600"
                    : resultFlag === "Red"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                Result: {resultFlag}{" "}
                <FaFlag
                  className={`${
                    resultFlag === "Green"
                      ? "text-green-600"
                      : resultFlag === "Yellow"
                      ? "text-yellow-600"
                      : "text-red-600"
                  } flex items-center ml-2`}
                />
              </p>
              <p className="text-[20px] font-semibold text-black">
                Next step: {}
              </p>
            </div>
          </div>

          <div className="bottom-0 flex flex-col justify-center items-end">
            <button
              className="w-full bg-primary-color rounded-sm hover:bg-red-700 font-light text-white text-[20px] py-[10px] px-10 mt-[50px] lg:mt-0"
              onClick={goToMakeAppointment}
            >
              Make an appointment
            </button>
            <span className="py-2 underline cursor-pointer">More</span>
          </div>
        </div>
      </div>
    );
  };

  if (showCompletedView) {
    return <MedicalScreeningCompleted />;
  }

  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl font-medium mb-4 text-black/70">Your Progress</h1>
      <ProgressBar
        completedSections={
          completedSections.filter((completed) => completed).length
        }
        totalSections={sections.length}
      />
      <div className="flex flex-wrap mt-4 ">
        <div className="w-full md:w-1/4 p-2 ">
          <h2 className="text-3xl font-semibold mb-2 text-primary-color">
            Sections
          </h2>
          <div className="my-4">
            <SectionsList
              sections={sections}
              selectedSection={selectedSection}
              onSelectSection={handleSelectSection}
              onToggleCompletion={handleToggleCompletion}
              completedSections={completedSections}
            />
          </div>
        </div>
        <div className="w-full md:w-3/4 px-20 sm:px-3 md:px-16 my-10">
          <QuestionsSection
            sectionTitle={sections[selectedSection].title}
            questions={sections[selectedSection].questions}
            onAnswerChange={handleAnswerChange}
            answers={answers}
          />
          <div className="mt-4 flex justify-between">
            <button
              className={`bg-white text-primary-color border-2 border-primary-color py-2 px-4 rounded ${
                !areAllQuestionsAnswered()
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={handleBack}
              disabled={selectedSection === 0}
            >
              Back
            </button>
            <button
              className={`bg-primary-color text-white py-2 px-4 rounded ${
                !areAllQuestionsAnswered()
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!areAllQuestionsAnswered()}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionMainSection;
