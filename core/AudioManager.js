import { letters } from '../data/letters.js';

const sounds = {};
let correctSound;

// preload semua audio
export function initAudio() {
  // huruf A-Z
  for (let letter in letters) {
    sounds[letter] = new Howl({
      src: [letters[letter]],
      volume: 1.0,
      preload: true
    });
  }

  // suara benar
  correctSound = new Howl({
    src: ['assets/audio/cat.mp3'],
    volume: 1.0,
    preload: true
  });
}

// play suara huruf
export function playLetterSound(letter) {
  if (sounds[letter]) {
    sounds[letter].play();
  } else {
    console.log("Sound not found:", letter);
  }
}

// play suara benar
export function playCorrectSound() {
  if (correctSound) {
    correctSound.play();
  }
}