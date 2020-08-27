import readlineSync from 'readline-sync';

const printTheRule = (gameName) => {
  switch (gameName) {
    case 'cals':
      console.log('What is the result of the expression?');
      break;
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no"');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    default:
      break;
  }
};

const gameEngine = (game, gameName) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  printTheRule(gameName);

  const maxLevels = 3;

  for (let level = 0; level < maxLevels; level += 1) {
    const correctAnswer = game();
    const answer = readlineSync.question('Your answer: ');
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

export default gameEngine;
