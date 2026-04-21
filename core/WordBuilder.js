import { playLetterSound, playCorrectSound } from './AudioManager.js';
import { checkWord } from './WordValidator.js';

let currentWord = "";
let isAlreadyCorrect = false;

export function startWord(letter) {
  currentWord = letter;
  isAlreadyCorrect = false;

  // playLetterSound(letter);
}

export function addLetter(letter) {
  currentWord += letter;
  // playLetterSound(letter);
  return checkCurrentWord();
}

export function checkCurrentWord() {
  const isCorrect = checkWord(currentWord);

  if (isCorrect && !isAlreadyCorrect) {
    isAlreadyCorrect = true;
    setTimeout(() => {
      playCorrectSound();
    }, 500);
  }

  return isCorrect;
}

export function resetWord() {
  currentWord = "";
  isAlreadyCorrect = false;
}

export function getCurrentString() {
  return currentWord;
}