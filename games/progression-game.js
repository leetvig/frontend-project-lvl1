import readlineSync from 'readline-sync';
import {
  lose, win, numberOfStages, getRandomNumber,
} from '../src/index.js';

const game = (userName) => {
  console.log('What number is missing in the progression?');
  for (let stage = 0; stage < numberOfStages; stage += 1) {
    let firstNumber = getRandomNumber();
    const step = getRandomNumber(10, 1);
    const progressionLength = 10;
    const index = getRandomNumber(progressionLength);
    let correctAnswer;
    let progression = '';
    for (let i = 0; i < progressionLength; i += 1) {
      if (i === index) {
        progression += '..';
        correctAnswer = String(firstNumber);
        firstNumber += step;
      } else {
        progression += String(firstNumber);
        firstNumber += step;
      }
      progression += ' ';
    }
    console.log(`Question: ${progression}`);
    const answer = readlineSync.question('Your answer: ');
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
