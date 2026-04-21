import { words as baseWords } from '../data/words.js';
import { wordsLevel2 } from './words_Level2.js';
import { wordsLevel3 } from '../data/Word_Level3.js';

const VALID_WORDS = new Set([
  ...baseWords.map((word) => word.toUpperCase().trim()),
  ...wordsLevel2.map((item) => item.answer.toUpperCase().trim()),
  ...wordsLevel3.map((item) => item.answer.toUpperCase().trim())
]);

export function checkWord(input) {
  if (!input) {
    return false;
  }
  
  const upperInput = input.toUpperCase().trim();
  return VALID_WORDS.has(upperInput);
  
}