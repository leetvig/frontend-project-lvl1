import greeting from './greeting.js';

const startGame = (game) => {
  const userName = greeting();
  game(userName);
};

export default startGame;
