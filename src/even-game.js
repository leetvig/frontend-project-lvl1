import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const getRandomNumber = () => {
  const maxNumber = 100;
  return Math.floor(Math.random() * maxNumber);
};

const game = (userName) => {
  const numberOfStages = 3;
  for (let stage = 0; stage < numberOfStages; stage += 1) {
    const num = getRandomNumber();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

const startGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  game(userName);
};

export default startGame;
