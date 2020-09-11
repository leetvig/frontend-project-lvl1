import getRandomNumber from '../random.js';
import launchGameEngine from '../index.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const index = getRandomNumber(operators.length - 1);
  return operators[index];
};

const getResultOfCulculation = (num1, num2, operator) => {
  let result;
  switch (operator) {
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
  return result;
};

const generateGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(getResultOfCulculation(num1, num2, operator));
  return [question, correctAnswer];
};

const startGame = () => launchGameEngine(gameRule, generateGameData);

export default startGame;
