import React from "react";

interface MedicalScreeningCompletedProps {
  result: "Green Flag" | "Yellow Flag" | "Red Flag";
  allQuestionsAnswers: Record<string, string>;
}

const MedicalScreeningCompleted: React.FC<MedicalScreeningCompletedProps> = ({
  result,
  allQuestionsAnswers,
}) => {
  const getAnswersSummary = () => {
    const summary = Object.entries(allQuestionsAnswers).map(([id, answer]) => (
      <li key={id}>
        Question {id}: {answer}
      </li>
    ));
    return <ul>{summary}</ul>;
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Medical Screening Completed</h2>
      <div className="mb-4">
        <span className="font-semibold">Result:</span>{" "}
        <span
          className={
            result === "Green Flag"
              ? "text-green-600"
              : result === "Yellow Flag"
              ? "text-yellow-600"
              : "text-red-600"
          }
        >
          {result}
        </span>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Answers Summary:</h3>
        {getAnswersSummary()}
      </div>
    </div>
  );
};

export default MedicalScreeningCompleted;
