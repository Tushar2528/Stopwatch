let seconds = 0;
let minutes = 0;
let hours = 0;

let displayTime = document.getElementById('display-time');
let timer = null;

// function for stopwatch functionality
function stopwatch(){
	seconds++;

// conditions for resetting seconds , minutes and hours after the timer of 60
	if (seconds == 60){
		seconds=0;
		minutes++;

		if(minutes == 60){
			minutes = 0;
			hours++;
		}
	}

	let h = hours < 10 ? "0" + hours : hours;
	let m = minutes < 10 ? "0" + minutes : minutes;
	let s = seconds < 10 ? "0" + seconds : seconds;
	displayTime.innerHTML = h+":"+m+":"+s;
}


// function to start the stopwatch
function startwatch(){

	if (timer !== null){

		clearInterval(timer);
	}
	
	timer = setInterval(stopwatch,1000);

}


// function to stop the watch timer
function watchstop(){
	clearInterval(timer);

}

// function to reset the watch timer

function resetwatch(){
	clearInterval(timer);
	hours = 0;
	minutes = 0;
	seconds = 0;
	displayTime.innerHTML = "00:00:00";
}