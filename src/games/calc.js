import getRandomNumber from '../random.js';
import gameEngine from '../index.js';

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(operators.length - 1);
  return operators[index];
};

const getResult = (num1, num2, operator) => {
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
  return String(result);
};

const game = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  const question = `Question: ${num1} ${operator} ${num2}`;
  const correctAnswer = getResult(num1, num2, operator);
  return [question, correctAnswer];
};

const startGame = () => gameEngine(gameRules, game);

export default startGame;
