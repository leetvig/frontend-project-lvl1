import { getRandomNumber, isEven } from '../src/maths.js';

const game = () => {
  const num = getRandomNumber();
  console.log(`Question: ${num}`);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return correctAnswer;
};

export default game;
