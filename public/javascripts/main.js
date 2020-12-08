document.getElementById("startbtn")
    .addEventListener('click', function() {
        let interval;
        let seconds = 50; 
        interval = setInterval(function() {
            console.log(seconds);
            seconds--;
            if(!seconds) {
                clearInterval(interval);
                alert("Time's up!");
            }
        }, 1000)
});

