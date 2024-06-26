import React from 'react';
import Leaderboard from '../components/Leaderboard';
import { scores } from '../data';

const LeaderboardPage: React.FC = () => {
  return (
    <div>
      <Leaderboard scores={scores} />
    </div>
  );
};

export default LeaderboardPage;
