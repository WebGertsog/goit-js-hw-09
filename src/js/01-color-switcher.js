
const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');

let intervalId = null;

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

bodyRef.style.textAlign = "center";

startBtnRef.style.color = "LimeGreen";
startBtnRef.style.padding = "10px 20px";
startBtnRef.style.margin =  "30px";
startBtnRef.style.marginTop = "250px";
startBtnRef.style.borderRadius = "10px";
startBtnRef.style.fontWeight = "bold";
startBtnRef.style.fontFamily = "Montserrat";
startBtnRef.style.textTransform = "uppercase";
startBtnRef.style.letterSpacing = "2px";
startBtnRef.style.boxShadow = "0 0 20px rgba(0, 0, 0, .1)";
startBtnRef.style.transition = ".5s";


stopBtnRef.style.color = "tomato";
stopBtnRef.style.padding = "10px 20px";
stopBtnRef.style.margin =  "30px";
stopBtnRef.style.marginTop = "250px";
stopBtnRef.style.borderRadius = "10px";
stopBtnRef.style.fontWeight = "bold";
stopBtnRef.style.fontFamily = "Montserrat";
stopBtnRef.style.textTransform = "uppercase";
stopBtnRef.style.letterSpacing = "2px";
stopBtnRef.style.boxShadow = "0 0 20px rgba(0, 0, 0, .1)";
stopBtnRef.style.transition = ".5s";

const randomColor = () =>{
    bodyRef.style.backgroundColor = getRandomHexColor();
 
}


startBtnRef.addEventListener('click', () =>{
    intervalId = setInterval(randomColor, 1000);
    startBtnRef.setAttribute("disabled", true);
    stopBtnRef.removeAttribute("disabled");
   
})
   

stopBtnRef.addEventListener('click', () => {
    clearInterval(intervalId);
    startBtnRef.removeAttribute("disabled");
    stopBtnRef.setAttribute("disabled", true);
});
