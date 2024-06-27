import React, { useState, useEffect } from "react";
import QuestionComponent from "../components/Question";
import { questions } from "../data";
import randomQuiz from "../utils/random";
import { Question } from "../types/types";
import { useNavigate } from "react-router-dom";
import { scores } from "../data";

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [name, setName] = useState("anonymous");
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
        scores.push({
            name: name,
            score: score,
        })
      navigate("/leaderboard");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="mb-4 flex">
        <label className="block text-gray-700 text-sm font-bold my-auto mr-3">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="anonymous"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {randomQuestions.length > 0 && (
        <QuestionComponent
          question={randomQuestions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
      <p className="text-lg my-3">Score: {score}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 transition-all"
        onClick={() => navigate("/")}
      >
        Go back
      </button>
    </div>
  );
};

export default QuizPage;
