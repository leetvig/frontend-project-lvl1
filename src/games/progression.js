import getRandomNumber from '../random.js';
import launchGameEngine from '../index.js';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (firstNumber, step, length) => {
  const progression = [];
  let nextNumber = firstNumber;
  for (let i = 0; i < length; i += 1) {
    progression.push(nextNumber);
    nextNumber += step;
  }
  return progression;
};

const generateGameData = () => {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber(1, 10);
  const index = getRandomNumber(0, progressionLength - 1);
  const progression = getProgression(firstNumber, step, progressionLength);
  const correctAnswer = String(progression[index]);
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGame = () => launchGameEngine(gameRule, generateGameData);

export default startGame;
