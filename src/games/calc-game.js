import getRandomNumber from '../random.js';

const getRandomSign = () => {
  const sings = ['+', '-', '*'];
  const index = getRandomNumber(sings.length - 1);
  return sings[index];
};

const getResult = (num1, num2, sign) => {
  let result;
  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return undefined;
  }
  return String(result);
};

const game = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const sign = getRandomSign();
  console.log(`Question: ${num1} ${sign} ${num2}`);
  const correctAnswer = getResult(num1, num2, sign);
  return correctAnswer;
};

const gameRules = () => {
  console.log('What is the result of the expression?');
};

export { game, gameRules };
