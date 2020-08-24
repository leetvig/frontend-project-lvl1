export const lose = (answer, correctAnswer, userName) => {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  console.log(`Let's try again, ${userName}`);
};

export const win = (userName) => {
  console.log(`Congratulations, ${userName}`);
};
