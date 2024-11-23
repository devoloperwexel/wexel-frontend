"use client";

import React, { useState } from "react";
import SectionsList from "./SectionsList";
import ProgressBar from "./ProgressBar";
import QuestionsSection from "./QuestionsSection";
import { useRouter } from "next/navigation";
import { FaFlag } from "react-icons/fa6";

type QuestionType = "RADIO" | "TEXTAREA" | "CHECKBOX" | "TOPIC_QUESTION";

interface Question {
  id: string;
  requiredRef?: { id: string; value: string };
  question: string;
  info?: string;
  values?: string[];
  type: QuestionType;
}

interface MedicalScreeningCollection {
  title: string;
  question: Question[];
}

type Props = {
  questionnaires: MedicalScreeningCollection[];
};

const QuestionMainSection = ({ questionnaires }: Props) => {
  const [sections, setSections] =
    useState<MedicalScreeningCollection[]>(questionnaires);
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
    const currentQuestions = sections[selectedSection].question;

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
            questions={sections[selectedSection].question}
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
