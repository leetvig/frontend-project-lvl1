import getRandomNumber from '../random.js';

const getProgression = (firstNumber, step, progressionLength) => {
  const progression = [];
  let nextNumber = firstNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(nextNumber);
    nextNumber += step;
  }
  return progression;
};

const game = () => {
  const firstNumber = getRandomNumber();
  const step = getRandomNumber(10, 1);
  const progressionLength = 10;
  const index = getRandomNumber(progressionLength - 1);
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

const gameRules = () => {
  console.log('What number is missing in the progression?');
};

export { game, gameRules };
