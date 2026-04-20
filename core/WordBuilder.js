import { playLetterSound, playCorrectSound } from './AudioManager.js';
import { checkWord } from './WordValidator.js';
import { getCurrentWord } from './ArrangeManager.js';

console.log('[WordBuilder.js] Loaded');

let currentWord = "";
let isAlreadyCorrect = false;

export function startWord(letter) {
  currentWord = letter;
  isAlreadyCorrect = false;

  playLetterSound(letter);

  console.log("[WordBuilder] Start:", currentWord);
}

export function addLetter(letter) {
  currentWord += letter;

  playLetterSound(letter);

  console.log("[WordBuilder] Added letter:", letter, "Current word:", currentWord);

  return checkCurrentWord();
}

export function checkCurrentWord() {
  console.log("[WordBuilder] Checking word:", currentWord);
  const isCorrect = checkWord(currentWord);
  console.log("[WordBuilder] checkWord() returned:", isCorrect);

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