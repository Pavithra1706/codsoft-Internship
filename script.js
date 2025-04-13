const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
//const display = document.getElementById("display");
const clickSound = new Audio("click.mp3"); // place this sound file in same folder

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function appendValue(value) {
  playSound();
  display.value += value;
}

function clearDisplay() {
  playSound();
  display.value = "";
}

function calculate() {
  playSound();
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
