import React from "react";
import { Question } from "../types/types";

interface Props {
  question: Question;
  onAnswer: (answer: string) => void;
}

const QuestionComponent: React.FC<Props> = ({ question, onAnswer }) => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-black text-2xl my-8 text-center">{question.question}</h2>
      {question.options.map((option, index) => (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 mx-2 transition-all"
          key={index}
          onClick={() => onAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionComponent;
