const seconds = document.getElementById('sec');
const minutes = document.getElementById('min');
const hours = document.getElementById('hour');

setInterval(updateClock, 1000);

function updateClock(){
	let date = new Date();
	let sec = date.getSeconds() / 60;
	let min = (date.getMinutes() + sec) / 60;
	let hour = (date.getHours() + min) / 12;

	seconds.style.transform = "rotate(" + (sec * 360) + "deg)";
	minutes.style.transform = "rotate(" + (min * 360) + "deg)";
	hours.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();