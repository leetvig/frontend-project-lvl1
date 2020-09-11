import getRandomNumber from '../random.js';
import launchGameEngine from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num2 > num1) return getGCD(num2, num1);
  if (num2 > 0) {
    const divisor = num1 % num2;
    return getGCD(num2, divisor);
  }
  return num1;
};

const generateGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGCD(num1, num2));
  return [question, correctAnswer];
};

const startGame = () => launchGameEngine(gameRule, generateGameData);

export default startGame;
