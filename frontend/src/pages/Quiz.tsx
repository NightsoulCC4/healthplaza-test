import React, { useState, useEffect } from 'react';
import QuestionComponent from '../components/Question';
import { questions } from '../data';
import randomQuiz from '../utils/random';
import { Question } from '../types/types';
import { useNavigate } from 'react-router-dom';

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setRandomQuestions(randomQuiz([...questions]));
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === randomQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < randomQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/leaderboard');
    }
  };

  return (
    <div>
      {randomQuestions.length > 0 && (
        <QuestionComponent
          question={randomQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
      <p>Score: {score}</p>
    </div>
  );
};

export default QuizPage;
