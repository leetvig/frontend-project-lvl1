import getRandomNumber from '../random.js';
import launchGameEngine from '../index.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getRandomOperator = () => {
  const index = getRandomNumber(0, operators.length - 1);
  return operators[index];
};

const getResultOfCulculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return undefined;
  }
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
