import React from 'react';
import { Score } from '../types/types';

interface Props {
  scores: Score[];
}

const Leaderboard: React.FC<Props> = ({ scores }) => {
  return (
    <div>
      <h2>Leader Board</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.name}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
