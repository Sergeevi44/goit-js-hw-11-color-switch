import styles from '../styles.css'

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

start.addEventListener('click', changeBodyColor);
stop.addEventListener('click', stopChangeBodyColor);

const changeBodyColor = setInterval(() => {
	const color = randomIntegerFromInterval(0, 5);
	body.style.backgroundColor = colors[color];
	start.setAttribute('disabled', 'true');
}, 1000);

const stopChangeBodyColor = function () {
	clearInterval(changeBodyColor);
	start.setAttribute('disabled', 'false');
}

