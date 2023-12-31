let startButton;
let stopButton;
let resetButton;
let timeView;

let timer;
let startTime;
let elapsedTime = 0;
let holdTime = 0;

window.onload = function () {
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    timeView = document.getElementById("time");
}

function start(){
    startTime = Date.now();
    measureTime();
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

function stop(){
    clearInterval(timer);
    holdTime += Date.now() - startTime;
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function reset(){
    clearInterval(timer);
    elapsedTime = 0;
    holdTime = 0;
    timeView.textContent = "00:00:00:0";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

function measureTime() {
    timer = setTimeout(function () {
        elapsedTime = Date.now() - startTime + holdTime;
        timeView.textContent = new Date(elapsedTime).toISOString().slice(11, 21);
        measureTime();
  }, 10);
}
