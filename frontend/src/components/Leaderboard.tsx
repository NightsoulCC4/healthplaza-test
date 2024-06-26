import React from "react";
import { Score } from "../types/types";
import compare from "../utils/compare";

interface Props {
  scores: Score[];
}

const Leaderboard: React.FC<Props> = ({ scores }) => {

  return (
    <div className="m-3">
      <h2 className="">Leaderboard</h2>
      <ul>
        {scores.sort(compare).map((el, index) => {
          const { name, score } = el;

          return (
            <li key={index}>
              {name}: {score}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Leaderboard;
