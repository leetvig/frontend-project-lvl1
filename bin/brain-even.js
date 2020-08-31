#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { game, gameRules } from '../src/games/even-game.js';

gameEngine(game, gameRules);
