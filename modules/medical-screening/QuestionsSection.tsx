import React from "react";
import InfoIcon from "./InfoIcon";

interface Question {
  id: string;
  requiredRef?: { id: string; value: string };
  questionText: string;
  values?: string[];
  type: QuestionType;
  info?: string;
}

type QuestionType = "RADIO" | "TEXTAREA" | "CHECKBOX" | "TOPIC_QUESTION";

interface QuestionsSectionProps {
  sectionTitle: string;
  questions: Question[];
  onAnswerChange: (id: string, answer: string) => void;
  answers: Record<string, string>;
}

const QuestionsSection: React.FC<QuestionsSectionProps> = ({
  sectionTitle,
  questions,
  onAnswerChange,
  answers,
}) => {

  const renderRadio = (questionText: Question) => (
    <div>
      {questionText.values?.map((value) => (
        <label key={value} className="mr-4 text-xl">
          <input
            type="radio"
            name={questionText.id}
            value={value}
            checked={answers[questionText.id] === value}
            onChange={() => onAnswerChange(questionText.id, value)}
            className="w-5"
          />
          {value}
        </label>
      ))}
    </div>
  );

  const renderTextarea = (questionText: Question) => (
    <textarea
      className="w-[70%] border rounded p-2 text-2xl"
      value={answers[questionText.id] || ""}
      onChange={(e) => onAnswerChange(questionText.id, e.target.value)}
      rows={3}
    />
  );

  const renderCheckbox = (questionText: Question) => (
    <label className="flex items-center text-2xl">
      <input
        type="checkbox"
        checked={answers[questionText.id] === "true"}
        onChange={() => onAnswerChange(questionText.id, answers[questionText.id] === "true" ? "false" : "true")}
        className="mr-2"
      />
      {questionText.questionText}
    </label>
  );

  const renderQuestion = (questionText: Question) => (
    <div key={questionText.id} className="mb-4 w-full flex gap-x-4 justify-between">
      <div className="flex-1 w-[70%]">
        <div className="mb-2 text-2xl flex items-center">
          <div dangerouslySetInnerHTML={{ __html: questionText.questionText }} />
          {questionText.info && <InfoIcon info={questionText.info} />}
        </div>
      </div>
      <div className="flex-2 w-[30%] text-right">
        {questionText.type === "RADIO" && renderRadio(questionText)}
        {questionText.type === "TEXTAREA" && renderTextarea(questionText)}
        {questionText.type === "CHECKBOX" && renderCheckbox(questionText)}
      </div>
    </div>
  );

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">{sectionTitle}</h2>
      {questions.map((questionText) => {
        const shouldRender =
          !questionText.requiredRef || answers[questionText.requiredRef.id] === questionText.requiredRef.value;
        return shouldRender ? renderQuestion(questionText) : null;
      })}
    </div>
  );
};

export default QuestionsSection;
