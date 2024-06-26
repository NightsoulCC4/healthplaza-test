import React from 'react';
import { Question } from '../types/types';

interface Props {
  question: Question;
  onAnswer: (answer: string) => void;
}

const QuestionComponent: React.FC<Props> = ({ question, onAnswer }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionComponent;