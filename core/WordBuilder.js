import { playLetterSound, playCorrectSound } from './AudioManager.js';
import { checkWord } from './WordValidator.js';
import { getCurrentWord } from './ArrangeManager.js';

let currentWord = "";
let isAlreadyCorrect = false;

export function startWord(letter) {
  currentWord = letter;
  isAlreadyCorrect = false;

  playLetterSound(letter);

  console.log("Start:", currentWord);
}
export function addLetter(letter) {
  currentWord += letter;

  playLetterSound(letter);

  console.log("Current:", currentWord);

  return checkCurrentWord();
}

export function checkCurrentWord() {
  const isCorrect = checkWord(currentWord);

  if (isCorrect && !isAlreadyCorrect) {
    console.log(currentWord, "✅ BENAR");

    isAlreadyCorrect = true;

    // ⏳ kasih jeda biar huruf terakhir selesai
    setTimeout(() => {
      playCorrectSound();
    }, 500); // bisa kamu adjust (400–700ms)
  }

  return isCorrect;
}

export function resetWord() {
  currentWord = "";
  isAlreadyCorrect = false;
}