const display = document.getElementById("display");
const startStopButton = document.getElementById("startStopButton");
const resetButton = document.getElementById("resetButton");

let timerInterval;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor((ms % 1000) / 10);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
}

function updateDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

function startStop() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    startStopButton.textContent = "Start";
  } else {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    isRunning = true;
    startStopButton.textContent = "Stop";
  }
}

function reset() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  isRunning = false;
  startStopButton.textContent = "Start";
  elapsedTime = 0;
}

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);
