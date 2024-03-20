const display = document.querySelector(".display");
const time = function getT() {

    const currentDate = new Date();
    let hour = currentDate.getHours();
    const rtrn = hour;
    const minutes = currentDate.getMinutes();
    const second = currentDate.getSeconds()
    if (hour > 12) {
        hour = hour - 12;
        const totalTime = hour + ":" + minutes + ":" + second + " pm";
        display.innerText = totalTime;
    }
    else {
        const totalTime = hour + ":" + minutes + ":" + second + " am";
        display.innerText = totalTime;
    }

    setTimeout(getT, 1000);
}

time();