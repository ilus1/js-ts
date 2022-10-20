const displayTimer = document.getElementById('time');

let timer = getStartTimer();
let interval;
displayTimer.innerHTML = toDisplayformat(timer);

function getStartTimer() {
    return new Date().setUTCHours(3, 0, 0, 0);
}

function toDisplayformat(timer) {
    return new Date(timer).toLocaleTimeString('pt-BR', {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}

function restartTimer() {
    timer = getStartTimer();
    displayTimer.style.color = 'black';
    displayTimer.innerHTML = toDisplayformat(timer);
}

function stopTimer() {
    clearInterval(interval);
    displayTimer.style.color = 'red';
}

function startTimer() {
    displayTimer.style.color = 'black';
    interval = setInterval(() => {
        timer += 1000;
        displayTimer.innerHTML = toDisplayformat(timer);
    }, 1000);
}
