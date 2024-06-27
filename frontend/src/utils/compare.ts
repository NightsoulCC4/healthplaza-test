import { Score } from "../types/types";

const compare = (a: Score, b: Score) => {
  if (a?.score > b.score) {
    return -1;
  }
  if (a.score < b.score) {
    return 1;
  }
  return 0;
};

export default compare;
