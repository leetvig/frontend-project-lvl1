import getRandomNumber from '../random.js';
import launchGameEngine from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const positiveNum = num > 0 ? num : -num;
  if (positiveNum < 2) return false;
  for (let i = 2; i <= positiveNum / 2; i += 1) {
    if (positiveNum % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const num = getRandomNumber();
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => launchGameEngine(gameRule, generateGameData);

export default startGame;
