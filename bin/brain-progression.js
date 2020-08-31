#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { game, gameRules } from '../src/games/progression-game.js';

gameEngine(game, gameRules);
