// Breathing text sync with animation
const breathingText = document.getElementById("breathing-text");
setInterval(() => {
  breathingText.textContent = breathingText.textContent === "Inhale..." ? "Exhale..." : "Inhale...";
}, 4000);

// Meditation Timer
let timerInterval;
let sessionCount = localStorage.getItem("sessions") ? parseInt(localStorage.getItem("sessions")) : 0;
document.getElementById("session-count").textContent = `Sessions completed: ${sessionCount}`;

function startMeditation() {
  clearInterval(timerInterval);

  let minutes = document.getElementById("minutes").value;
  if (!minutes || minutes <= 0) {
    alert("Please enter valid minutes!");
    return;
  }

  let time = minutes * 60;
  const display = document.getElementById("timer-display");

  timerInterval = setInterval(() => {
    const m = String(Math.floor(time / 60)).padStart(2, "0");
    const s = String(time % 60).padStart(2, "0");
    display.textContent = `${m}:${s}`;
    time--;

    if (time < 0) {
      clearInterval(timerInterval);
      display.textContent = "Done!";

      sessionCount++;
      localStorage.setItem("sessions", sessionCount);
      document.getElementById("session-count").textContent = `Sessions completed: ${sessionCount}`;
    }
  }, 1000);
}

// Ambient Sounds
let currentAudio = null;

function playSound(type) {
  stopSound();
  let soundSrc = "";

  if (type === "rain") soundSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  if (type === "forest") soundSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
  if (type === "ocean") soundSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3";

  currentAudio = new Audio(soundSrc);
  currentAudio.loop = true;
  currentAudio.play();
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
}
