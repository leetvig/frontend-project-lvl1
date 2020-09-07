import getRandomNumber from '../random.js';
import gameEngine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const game = () => {
  const num = getRandomNumber();
  const question = `Question: ${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => gameEngine(gameRules, game);

export default startGame;
