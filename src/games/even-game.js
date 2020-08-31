import getRandomNumber from '../random.js';

const isEven = (num) => num % 2 === 0;

const game = () => {
  const num = getRandomNumber();
  console.log(`Question: ${num}`);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return correctAnswer;
};

const gameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
};

export { game, gameRules };
