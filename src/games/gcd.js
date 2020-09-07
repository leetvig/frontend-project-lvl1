import getRandomNumber from '../random.js';
import gameEngine from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num2 > num1) return getGCD(num2, num1);
  if (num2 > 0) {
    const divisor = num1 % num2;
    return getGCD(num2, divisor);
  }
  return String(num1);
};

const game = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = getGCD(num1, num2);
  return [question, correctAnswer];
};

const startGame = () => gameEngine(gameRules, game);

export default startGame;
