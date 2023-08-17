const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");


const anoSeguinte = new Date().getFullYear() + 1;
const anoNovo = new Date(`1 Jan ${anoSeguinte}`) ;


function contagem() {
    const newYearsDate = new Date(anoNovo);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    diasEl.innerHTML = days;
    horasEl.innerHTML = formatTime(hours);
    minutosEl.innerHTML = formatTime(mins);
    segundosEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

contagem();

setInterval(contagem, 1000);