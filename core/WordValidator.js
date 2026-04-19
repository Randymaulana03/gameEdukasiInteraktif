import { words } from '../data/words.js';

export function checkWord(input) {
  const upperInput = input.toUpperCase();
  return words.includes(upperInput);
}