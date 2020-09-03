import getRandomNumber from '../random.js';

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
  console.log(`Question: ${num1} ${num2}`);
  const correctAnswer = getGCD(num1, num2);
  return correctAnswer;
};

export { game, gameRules };
