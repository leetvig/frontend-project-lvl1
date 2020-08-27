import { getRandomNumber, getRandomSign, getResult } from '../src/maths.js';

const game = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const sign = getRandomSign();
  console.log(`Question: ${num1} ${sign} ${num2}`);
  const correctAnswer = getResult(num1, num2, sign);
  return correctAnswer;
};

export default game;
