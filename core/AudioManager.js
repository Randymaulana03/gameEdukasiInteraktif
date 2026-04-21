import { letters } from '../data/letters.js';

const sounds = {};
let correctSound;

function createSound(src) {
  return new Howl({
    src: [src],
    volume: 1.0,
    preload: false
  });
}

// initialize audio manager without preloading all sounds
export async function initAudio() {
  for (let letter in letters) {
    try {
      // Kita ambil datanya sebagai 'blob' atau 'arraybuffer'
      // Ini biasanya tidak memicu IDM karena dianggap request data biasa, bukan media
      const response = await fetch(letters[letter]);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      sounds[letter] = new Howl({
        src: [url],
        format: ['mp3'],
        preload: true,
        html5: false // Wajib false agar menggunakan Web Audio API
      });
    } catch (e) {
      console.error("Gagal load suara:", letter, e);
    }
  }
}

// play suara huruf

export function playLetterSound(letter) {
  if (!letter) return;

  const upper = letter.toUpperCase();
  
  // Jika suara belum pernah dimuat, buat objek barunya sekarang (Lazy Loading)
  if (!sounds[upper]) {
    const src = letters[upper];
    if (!src) return;

    sounds[upper] = new Howl({
      src: [src],
      volume: 1.0,
      preload: false, // Preload hanya saat huruf ini dibutuhkan
      html5: true    // Sangat penting agar tidak dianggap sebagai download file biasa
    });
  }

  // Putar suaranya
  sounds[upper].play();
}

// play suara benar
export function playCorrectSound() {
    // 1. Inisialisasi jika belum ada
    if (!correctSound) {
        correctSound = new Howl({
            src: ['../assets/audio/Benar.mp3.mpeg'],
            volume: 1.0,
            preload: true
        });
    }

    // 2. Resume Context untuk browser
    if (Howler.ctx && Howler.ctx.state === 'suspended') {
        Howler.ctx.resume();
    }

    // 3. CEK: Jika sedang bunyi, jangan stop/play lagi
    // Ini mencegah bunyi "re-trigger" yang bikin suara kayak dobel
    if (correctSound.playing()) {
        return; // Keluar dari fungsi, biarkan suara yang pertama selesai
    }

    correctSound.play();
}

export function playIncorrectSound() {
    // Buat variabel local saja jika hanya dipakai sesekali
    const incorrect = new Howl({
        src: ['../assets/audio/Salah.mp3'], 
        volume: 0.2,
        preload: true
    });

    if (Howler.ctx && Howler.ctx.state === 'suspended') {
        Howler.ctx.resume();
    }

    incorrect.play();
}