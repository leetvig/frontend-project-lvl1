import { getRandomNumber, getProgression } from '../src/maths.js';

const game = () => {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber(10, 1);
  const progressionLength = 10;
  const index = getRandomNumber(progressionLength);
  const progression = getProgression(firstNumber, step, progressionLength);
  const correctAnswer = String(progression[index]);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    question += (i === index ? '..' : String(progression[i]));
    question += ' ';
  }
  console.log(`Question: ${question}`);
  return correctAnswer;
};

export default game;
