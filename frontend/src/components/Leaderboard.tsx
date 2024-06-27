import React from "react";
import { Score } from "../types/types";
import compare from "../utils/compare";
import ranking from "../utils/ranking";
import { useNavigate } from "react-router-dom";

interface Props {
  scores: Score[];
}

const Leaderboard: React.FC<Props> = ({ scores }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h2 className="text-center text-4xl my-3">Leaderboard</h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Place
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {scores.sort(compare).map((el, index) => {
              const { name, score } = el;

              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {ranking(index + 1)}
                  </th>
                  <td className="px-6 py-4">{name}</td>
                  <td className="px-6 py-4">{score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 transition-all"
        onClick={() => navigate("/")}
      >
        Go back
      </button>
    </div>
  );
};

export default Leaderboard;
