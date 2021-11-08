const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');

startBtnRef.style.padding = "10px 20px";
startBtnRef.style.margin =  "30px";
startBtnRef.style.marginTop = "250px";
startBtnRef.style.color = "LimeGreen";
startBtnRef.style.fontSize = "30px";
startBtnRef.style.letterSpacing = "2px";
startBtnRef.style.fontFamily = "Montserrat";
startBtnRef.style.fontWeight = "bold";
startBtnRef.style.textTransform = "uppercase";
startBtnRef.style.borderRadius = "10px";
startBtnRef.style.boxShadow = "0 0 20px rgba(0, 0, 0, .1)";
startBtnRef.style.transition = ".5s";

stopBtnRef.style.padding = "10px 30px";
stopBtnRef.style.margin =  "30px";
stopBtnRef.style.marginTop = "250px";
stopBtnRef.style.color = "tomato";
stopBtnRef.style.fontSize = "30px";
stopBtnRef.style.letterSpacing = "2px";
stopBtnRef.style.fontFamily = "Montserrat";
stopBtnRef.style.fontWeight = "bold";
stopBtnRef.style.textTransform = "uppercase";
stopBtnRef.style.borderRadius = "10px";
stopBtnRef.style.boxShadow = "0 0 20px rgba(0, 0, 0, .1)";
stopBtnRef.style.transition = ".5s";

export {bodyRef, startBtnRef, stopBtnRef};