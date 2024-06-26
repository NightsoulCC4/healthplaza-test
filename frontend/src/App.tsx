import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home';
import Quizpage from './pages/Quiz';
import Leaderboardpage from './pages/Leaderboard';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quizpage />} />
        <Route path="/leaderboard" element={<Leaderboardpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
