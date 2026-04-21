import { initAudio, playLetterSound } from "./core/AudioManager.js";
import { checkWord } from "./core/WordValidator.js";
import {
  startWord,
  addLetter,
  checkCurrentWord,
  resetWord,
} from "./core/WordBuilder.js";
import {
  setInitialLetters,
  updateArrangement,
  checkArrangement,
  getCurrentWord,
} from "./core/ArrangeManager.js";
import { letters } from "./data/letters.js";

initAudio();

// 🔊 AUDIO TEST
window.testSound = function (letter) {
  playLetterSound(letter);
};

// 🧠 VALIDATOR TEST
window.testWord = function (word) {
  return checkWord(word);
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

// Dio lvl 1

const lettersGrid = document.getElementById("lettersGrid");
const voiceStatus = document.getElementById("voiceStatus");
let availableVoices = [];
let preferredVoice = null;

const bubbleStyles = [
  { bg: "#e8a4b6", color: "#d7262d" },
  { bg: "#81601d", color: "#2bc3ff" },
  { bg: "#6ea1af", color: "#2b6f14" },
  { bg: "#ff3a3a", color: "#1f6f15" },
  { bg: "#a78fba", color: "#a3ffd0" },
  { bg: "#1e2a72", color: "#ff7f8f" },
  { bg: "#00d400", color: "#bff8ff" },
  { bg: "#e400b5", color: "#d8ff4d" },
  { bg: "#f50047", color: "#7ff0bf" },
  { bg: "#67a44f", color: "#9af9c4" },
  { bg: "#f8c100", color: "#ff5a63" },
  { bg: "#9ec100", color: "#f6f68b" },
  { bg: "#11c2c2", color: "#2c6f14" },
  { bg: "#98b356", color: "#f7dfef" },
  { bg: "#c2788a", color: "#6f1ca9" },
  { bg: "#9de8df", color: "#0c0012" },
  { bg: "#e4ef1f", color: "#2a5d17" },
  { bg: "#d52f2f", color: "#d7d929" },
  { bg: "#7aaeb8", color: "#ffe8f5" },
  { bg: "#8a103a", color: "#e1ff2f" },
  { bg: "#e33b75", color: "#040000" },
  { bg: "#5f4732", color: "#f08ad7" },
  { bg: "#e000aa", color: "#1443a3" },
  { bg: "#12bfb8", color: "#001111" },
  { bg: "#b39b73", color: "#eb00b5" },
  { bg: "#ff3c3c", color: "#b8f179" },
];

for (let i = 0; i < 26; i += 1) {
  const upper = String.fromCharCode(65 + i);
  const lower = String.fromCharCode(97 + i);
  const style = bubbleStyles[i % bubbleStyles.length];

  const button = document.createElement("button");
  button.type = "button";
  button.className = "letter-btn";
  button.textContent = upper + lower;
  button.setAttribute(
    "aria-label",
    "Huruf " + upper + " dan huruf kecil " + lower,
  );
  button.style.backgroundColor = style.bg;
  button.style.color = style.color;
  button.style.animationDelay = (0.03 * i).toFixed(2) + "s";

  button.addEventListener("click", () => {
  console.log("Tombol diklik untuk huruf:", upper); // Tambahkan ini
  button.classList.add("active");

  try {
    playLetterSound(upper);
    console.log("Fungsi playLetterSound berhasil dipanggil");
  } catch (err) {
    console.error("Gagal memutar suara:", err);
  }

  setTimeout(() => {
    button.classList.remove("active");
  }, 180);
});

  lettersGrid.appendChild(button);
}