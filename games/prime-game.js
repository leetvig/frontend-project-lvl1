import { getRandomNumber, isPrime } from '../src/maths.js';

const game = () => {
  const num = getRandomNumber();
  console.log(`Question: ${num}`);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return correctAnswer;
};

export default game;
