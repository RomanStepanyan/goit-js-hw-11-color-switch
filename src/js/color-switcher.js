'use strict'
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const ref = {
  body : document.querySelector('body'),
  startBtnRef: document.querySelector('button[data-action="start"]'),
  stopBtnRef : document.querySelector('button[data-action="stop"]'),
}
let randomColor = null;
function indexNumber () {
  randomColor = setInterval(() => {    
    ref.body.style.backgroundColor = colors[randomIntegerFromInterval (0, colors.length-1)];
}, 1000);
}
 
ref.startBtnRef.addEventListener('click', (event)=>{
  indexNumber()
  event.target.disabled = true
})

ref.stopBtnRef.addEventListener('click', () => {
  clearInterval(randomColor)
  ref.startBtnRef.disabled = false;
})

