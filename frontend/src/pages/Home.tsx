import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-black text-3xl my-8 text-center">Welcome to the Quiz App</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 transition-all"
        onClick={() => navigate("/quiz")}
      >
        Start Quiz
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 transition-all"
        onClick={() => navigate("/leaderboard")}
      >
        Leaderboard
      </button>
    </div>
  );
};

export default HomePage;
