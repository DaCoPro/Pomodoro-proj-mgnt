//-------------------------------------------------EVENT LISTENERS

document.getElementById("workbtn")
    .addEventListener("click", pomodoro);
document.getElementById("breakbtn")
    .addEventListener("click", pomodoro);

//-------------------------------------------------CACHE

let timeDisplay = document.getElementById("timedisplay");
let titleTimeDisp = document.getElementById("titletimedisp");

//-------------------------------------------------FUNCTIONS

//page default
let clickStatus = false;

function pomodoro(evt) {
    if (clickStatus) return;
    let interval;
    let seconds = 0;
    if(evt.target.id === 'workbtn') {
        seconds = 25 * 60;
    } else if (evt.target.id === 'breakbtn') {
        seconds = 5 * 60;
    }
    clickStatus = true;
    interval = setInterval(function() {
        let minutes = Math.floor(seconds / 60);
        let secs = Math.floor(seconds % 60);
        if (secs < 10) {
            timeDisplay.innerHTML = `${minutes} : 0${secs}`;
            titleTimeDisp.innerHTML = `${minutes} : 0${secs}`;
        } else {
           timeDisplay.innerHTML = `${minutes} : ${secs}`; 
           titleTimeDisp.innerHTML = `${minutes} : ${secs}`; 
        }
        seconds--;
        if(!seconds) {
            clearInterval(interval);
            clickStatus = false;
            titleTimeDisp.innerHTML = 'Ding!';
            timeDisplay.innerHTML = "--:--"; 
        }
    }, 1000)
}
