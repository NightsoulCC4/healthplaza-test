import React from 'react';
import Leaderboard from '../components/Leaderboard';
import { Score } from '../types/types';

const scores: Score[] = [
  { name: 'Alice', score: 15 },
  { name: 'Bob', score: 18 },
  // Add more scores here
];

const LeaderboardPage: React.FC = () => {
  return (
    <div>
      <Leaderboard scores={scores} />
    </div>
  );
};

export default LeaderboardPage;
