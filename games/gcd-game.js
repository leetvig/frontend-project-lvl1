import { getRandomNumber, getGCD } from '../src/maths.js';

const game = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  console.log(`Question: ${num1} ${num2}`);
  const correctAnswer = getGCD(num1, num2);
  return correctAnswer;
};

export default game;
