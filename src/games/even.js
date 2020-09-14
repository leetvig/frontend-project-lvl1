import getRandomNumber from '../random.js';
import launchGameEngine from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const generateGameData = () => {
  const num = getRandomNumber();
  const question = num;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => launchGameEngine(gameRule, generateGameData);

export default startGame;
