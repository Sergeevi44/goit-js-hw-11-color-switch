
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
}; //0;5

const body = document.querySelector('body');
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');

function changeBodyColor(){
	const color = randomIntegerFromInterval(0, 5);
	body.style.backgroundColor = colors[color];
	start.setAttribute('disabled', 'true');
	const change = setInterval(changeBodyColor, 1000);
	
const stopChangeBodyColor = function () {
	clearInterval(change);
	start.removeAttribute('disabled');
	}
	stop.addEventListener('click', stopChangeBodyColor);
}
start.addEventListener('click', changeBodyColor);




