function AttachListeners() {
    const TimerButton = document.getElementById('datecalc').getElementsByClassName('coheader')[0];
    const CalcDatesButton = document.getElementById('timer').getElementsByClassName('coheader')[0];
    TimerButton.addEventListener('click', switchToTimer);
    CalcDatesButton.addEventListener('click', switchToCalcDates);
}

function switchToTimer() {
    CalcDatesForm.style.display = 'none';
    TimerForm.style.display = 'block';
}

function switchToCalcDates() {
    CalcDatesForm.style.display = 'block';
    TimerForm.style.display = 'none';
}

const CalcDatesForm = document.getElementById('datecalc');
const TimerForm = document.getElementById('timer');
AttachListeners();