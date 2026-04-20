// Hardcode words list (tanpa import, langsung di sini)
const VALID_WORDS = [
  "CAT",
  "DOG",
  "BIRD",
  "APPLE",
  "ATAP"
];

console.log('[WordValidator.js] Initialized with words:', VALID_WORDS);

export function checkWord(input) {
  if (!input) {
    console.log('[checkWord] Input kosong, return false');
    return false;
  }
  
  const upperInput = input.toUpperCase().trim();
  const isValid = VALID_WORDS.includes(upperInput);
  
  console.log(`[checkWord] Input: "${input}" → "${upperInput}" → isValid: ${isValid}`);
  console.log(`[checkWord] Available words:`, VALID_WORDS);
  
  return isValid;
}