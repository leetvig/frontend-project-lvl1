import getRandomNumber from '../random.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const num = getRandomNumber();
  console.log(`Question: ${num}`);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return correctAnswer;
};

export { game, gameRules };
