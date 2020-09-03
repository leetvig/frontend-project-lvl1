import getRandomNumber from '../random.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const game = () => {
  const num = getRandomNumber();
  console.log(`Question: ${num}`);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return correctAnswer;
};

export { game, gameRules };
