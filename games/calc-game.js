import readlineSync from 'readline-sync';
import {
  lose, win, numberOfStages, getRandomNumber, getRandomSign, getExpression,
} from '../src/index.js';

const game = (userName) => {
  console.log('What is the result of the expression?');
  for (let stage = 0; stage < numberOfStages; stage += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const sign = getRandomSign();
    console.log(`Question: ${num1} ${sign} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getExpression(num1, num2, sign);
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      lose(answer, correctAnswer, userName);
      return;
    }
  }
  win(userName);
};

export default game;
