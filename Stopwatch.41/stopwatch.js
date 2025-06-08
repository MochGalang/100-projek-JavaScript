const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let timer = null;

function updateDisplay() {
  let jam = Math.floor(seconds / 3600);
  let menit = Math.floor((seconds % 3600) / 60);
  let detik = seconds % 60;

  display.textContent = 
    `${String(jam).padStart(2, '0')}:${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`;
}

function mulai() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function berhenti() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  berhenti();
  seconds = 0;
  updateDisplay();
}

startBtn.addEventListener("click", mulai);
stopBtn.addEventListener("click", berhenti);
resetBtn.addEventListener("click", reset);
