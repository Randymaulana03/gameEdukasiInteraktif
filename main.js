import { initAudio, playLetterSound } from './core/AudioManager.js';
import { checkWord } from './core/WordValidator.js';
import { startWord, addLetter, checkCurrentWord, resetWord } from './core/WordBuilder.js';
import { setInitialLetters, updateArrangement, checkArrangement, getCurrentWord } from './core/ArrangeManager.js';

initAudio();

// 🔊 AUDIO TEST
window.testSound = function(letter) {
  playLetterSound(letter);
};

// 🧠 VALIDATOR TEST
window.testWord = function(word) {
  const result = checkWord(word);
  console.log(word, result ? "BENAR" : "SALAH");
};

// 🎮 LEVEL 2 (builder)
window.startWord = startWord;
window.addLetter = addLetter;
window.checkCurrentWord = checkCurrentWord;
// window.submitWord = submitWord;
window.resetWord = resetWord;


// 🎮 LEVEL 3 (drag-based)
window.setInitialLetters = setInitialLetters;
window.updateArrangement = updateArrangement;
window.getCurrentWord = getCurrentWord;
window.checkArrangement = checkArrangement;