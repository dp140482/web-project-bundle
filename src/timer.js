import { DateTime } from "luxon";
const sound = new Audio('../media/Door-knock-sound-effect.mp3');

const startBtn = document.getElementById('start');
startBtn.addEventListener('click', startTimer);
const stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', stopTimer);
let inervID;

function durationFromTimeInput(input) {
    let time = input.value;
    if (time.length < 7) time += ':00';
    let delta = DateTime.fromFormat(time, 'hh:mm:ss');
    return { hours: delta.hour, minutes: delta.minute, seconds: delta.second };
}

function timeInterval(startTime, endTime) {
    let delta = endTime.diff(startTime).toFormat('hh:mm:ss');
    console.log(delta);
    return delta;
}

function startTimer(event) {
    event.preventDefault();
    const Timer = document.querySelector('input[name="timer"]');
    const endTime = DateTime.local().plus(durationFromTimeInput(Timer));
    if (!inervID) inervID = setInterval(() => {
        Timer.value = timeInterval(DateTime.local(), endTime);
        if (Timer.value == '00:00:00') {
            stopTimer(event);
            sound.play();
        }
    }, 100);

}

function stopTimer(event) {
    event.preventDefault();
    clearInterval(inervID);
    inervID = undefined;
}