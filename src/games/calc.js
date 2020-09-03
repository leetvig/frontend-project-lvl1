import getRandomNumber from '../random.js';

const gameRules = 'What is the result of the expression?';

const getRandomOperation = () => {
  const sings = ['+', '-', '*'];
  const index = getRandomNumber(sings.length - 1);
  return sings[index];
};

const getResult = (num1, num2, operation) => {
  let result;
  switch (operation) {
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
  const operation = getRandomOperation();
  console.log(`Question: ${num1} ${operation} ${num2}`);
  const correctAnswer = getResult(num1, num2, operation);
  return correctAnswer;
};

export { game, gameRules };
