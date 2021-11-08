import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import {Notify} from 'notiflix';

const timer = {
        days: document.querySelector('span[data-days]'),
        hours: document.querySelector('span[data-hours]'),
        minutes: document.querySelector('span[data-minutes]'),
        seconds: document.querySelector('span[data-seconds]'),
};
const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

startBtn.setAttribute('disabled', true);

let selectedTime = null;
let activeBtn = false;
let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
      selectedTime = selectedDates[0].getTime();

      if(selectedTime <= Date.now()) {
        startBtn.setAttribute('disabled', true);
        Notify.failure("Please choose a date in the future!");
        return
      }  
      input.setAttribute('disabled', true);
      startBtn.removeAttribute('disabled');
    },
  };

  flatpickr(input, options);

function onStartClick() {
  if(activeBtn){
    return
  }
  activeBtn = true;

  timerId = setInterval(() => {
    let dateNow = Date.now();
    const timeInterval = Math.max(selectedTime - dateNow, 0);
    const convertTime = convertMs(timeInterval);
    updatingTimeValues(convertTime);
    startBtn.setAttribute('disabled', true);
    if (timeInterval === 0) {
      clearInterval(timerId);
    }   
  }, 1000);

}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updatingTimeValues({ days, hours, minutes, seconds }) {
  timer.days.textContent = addLeadingZero(days);
  timer.hours.textContent = addLeadingZero(hours);
  timer.minutes.textContent = addLeadingZero(minutes);
  timer.seconds.textContent = addLeadingZero(seconds);
};

startBtn.addEventListener('click', onStartClick);