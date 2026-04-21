import { checkWord } from './WordValidator.js';
import { playCorrectSound } from './AudioManager.js';

let currentArrangement = [];

export function setInitialLetters(letters) {
  currentArrangement = [...letters];
}

export function updateArrangement(newOrder) {
  currentArrangement = [...newOrder];
  return checkArrangement();
}

export function getCurrentWord() {
  return currentArrangement.join('');
}
let isAlreadyCorrect = false;

export function checkArrangement() {
  const word = currentArrangement.join('');
  const isCorrect = checkWord(word);

  if (isCorrect && !isAlreadyCorrect) {
    playCorrectSound();
    isAlreadyCorrect = true;
  }

  return isCorrect;
}

