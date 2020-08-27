#!/usr/bin/env node
import gameEngine from '../src/index.js';
import game from '../games/gcd-game.js';

gameEngine(game, 'gcd');
