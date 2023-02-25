console.log("This is the clock");

// ANALOG CLOCK
let hours = document.getElementById("hour");
setInterval(() => {
    let d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = (30 * htime) + (mtime / 2); 
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hours.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);



// DIGITAL CLOCK
let hourTime = document.getElementById("hourTime");
let minuteTime = document.getElementById("minuteTime");
let secondTime = document.getElementById("secondTime");
let timeMeridian = document.getElementById("timeMeridian");

function time_function() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    (hour > 11) ? timeMeridian.innerHTML = "PM" : timeMeridian.innerHTML = "AM";
    hour = ((hour > 12) ? (hour - 12) : hour);
    hour = ((hour < 10) ? "0" : "") + hour;
    minute = ((minute < 10) ? "0" : "") + minute;
    second = ((second < 10) ? "0" : "") + second;

    hourTime.innerHTML = hour;
    minuteTime.innerHTML = minute;
    secondTime.innerHTML = second;

    // setTimeout(() => {
    //     time_function();
    // }, 1000)

}
// time_function();
setInterval(() => {
    time_function();
}, 1000);

