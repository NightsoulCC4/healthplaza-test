import { Question } from "../types/types";

const randomQuiz = (question: Question[]) => {
  for (let i = question.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [question[i], question[j]] = [question[j], question[i]];
  }

  return question;
};

export default randomQuiz;
