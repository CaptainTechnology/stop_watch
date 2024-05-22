const time = document.getElementById("time");
const stop = document.getElementById("stop");
const start = document.getElementById("start");
const reset = document.getElementById("reset");


let timer = null;
start.addEventListener("click", watchstart);
stop.addEventListener("click", watchstop);
reset.addEventListener("click", watchreset);

let [hour, minut, second] = [0, 0, 0];

function watch() {
    second++;
    if (second == 60) {
        second = 0;
        minut++;
    }
    if (minut == 60) {
        minut == 0;
        hour++;
    }

     h = hour < 10 ? "0" + hour : hour;
     m = minut < 10 ? "0" + minut : minut;
     s = second < 10 ? "0" + second : second;

    time.innerHTML = `${h}:${m}:${s}`;
}

function watchstart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(watch, 1000);
}

function watchstop() {
        clearInterval(timer);
    
}

function watchreset() {
        clearInterval(timer);
     [hour, minut, second] = [0, 0, 0];
    time.innerHTML = `00:00:00`; 
        
    
}



