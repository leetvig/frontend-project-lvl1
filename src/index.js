import readlineSync from 'readline-sync';

const gameEngine = (gameRules, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  const maxLevel = 3;

  for (let level = 0; level < maxLevel; level += 1) {
    const [question, correctAnswer] = game();

    console.log(question);
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
