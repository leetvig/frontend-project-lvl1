import readlineSync from 'readline-sync';
import {
  lose, win, numberOfStages, getRandomNumber, isEven,
} from '../src/index.js';

const game = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let stage = 0; stage < numberOfStages; stage += 1) {
    const num = getRandomNumber();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(num) ? 'yes' : 'no';
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
