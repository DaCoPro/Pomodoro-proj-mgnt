//-------------------------------------------------EVENT LISTENERS

document.getElementById("workbtn")
    .addEventListener("click", pomodoro);
document.getElementById("breakbtn")
    .addEventListener("click", pomodoro);
document.getElementById("projList")
    .addEventListener("click", projClick);

//-------------------------------------------------CACHE

let clickStatus = false;
let timeDisplay = document.getElementById("timedisplay");

//-------------------------------------------------FUNCTIONS

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
        timeDisplay.innerHTML = `${minutes} : ${secs}`;
        seconds--;
        if(!seconds) {
            clearInterval(interval);
            clickStatus = false;
        }
    }, 1000)
}

function projClick(evt) {
    console.log(projects);
}


