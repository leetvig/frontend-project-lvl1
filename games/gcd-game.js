import readlineSync from 'readline-sync';
import {
  lose, win, numberOfStages, getRandomNumber, getGCD,
} from '../src/index.js';

const game = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let stage = 0; stage < numberOfStages; stage += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getGCD(num1, num2);
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
