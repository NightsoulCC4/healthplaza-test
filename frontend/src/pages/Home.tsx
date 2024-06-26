import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
    <h1>Welcome to the Quiz App</h1>
      <button onClick={() => navigate('/quiz')}>Start Quiz</button>
      <button onClick={() => navigate('/leaderboard')}>Leader Board</button>
    </div>
  );
};

export default HomePage;
