document.getElementById("workbtn")
    .addEventListener('click', clickBtn);
document.getElementById("breakbtn")
    .addEventListener('click', clickBtn);

let clickStatus = false;
let timeDisplay = document.getElementById("timedisplay");

function clickBtn(evt) {
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



