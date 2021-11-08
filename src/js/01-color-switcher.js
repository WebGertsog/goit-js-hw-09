import {bodyRef, startBtnRef, stopBtnRef} from './helpers/ref-task-1'

let intervalId = null;

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const randomColor = () =>{
    bodyRef.style.backgroundColor = getRandomHexColor();
 
};

startBtnRef.addEventListener('click', () =>{
    intervalId = setInterval(randomColor, 1000);
    startBtnRef.setAttribute("disabled", true);
    stopBtnRef.removeAttribute("disabled");
   
});

stopBtnRef.addEventListener('click', () => {
    clearInterval(intervalId);
    startBtnRef.removeAttribute("disabled");
    stopBtnRef.setAttribute("disabled", true);
});
