import greeting from './greeting.js';
import { lose, win } from './game-over.js';
import {
  getRandomNumber, getRandomSign, getExpression, getGCD, isEven, isPrime,
} from './maths.js';
import startGame from './start-game.js';

const numberOfStages = 3;

export {
  greeting, lose, win, numberOfStages,
  getRandomNumber, getRandomSign, getExpression, getGCD, isEven, isPrime,
  startGame,
};
