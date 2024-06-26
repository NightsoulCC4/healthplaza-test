import { Question, Score } from "./types/types";

export const questions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Osmium"],
    correctAnswer: "Oxygen",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Claude Monet",
      "Pablo Picasso",
      "Leonardo da Vinci",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2",
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Venus", "Mars", "Earth", "Mercury"],
    correctAnswer: "Mercury",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Lettuce"],
    correctAnswer: "Avocado",
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    options: [
      "Alan Turing",
      "Charles Babbage",
      "John von Neumann",
      "Bill Gates",
    ],
    correctAnswer: "Charles Babbage",
  },
  {
    question: "Which country is the largest by land area?",
    options: ["China", "Canada", "USA", "Russia"],
    correctAnswer: "Russia",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    correctAnswer: "Portuguese",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["50°C", "75°C", "90°C", "100°C"],
    correctAnswer: "100°C",
  },
  {
    question: "Which organ pumps blood through the body?",
    options: ["Liver", "Lungs", "Heart", "Kidney"],
    correctAnswer: "Heart",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Marie Curie",
      "Alexander Fleming",
      "Isaac Newton",
      "Albert Einstein",
    ],
    correctAnswer: "Alexander Fleming",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
  },
];

export const scores: Score[] = [
  { name: "Alice", score: 15 },
  { name: "Bob", score: 18 },
];
