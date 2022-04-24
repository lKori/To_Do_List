const watch = document.querySelector("#watch");

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function currentTime() {
    const day = new Date();
    const week = day.getDay();
    const date = String(day.getDate()).padStart(2, "0");
    const hours = String(day.getHours()).padStart(2, "0");
    const minutes = String(day.getMinutes()).padStart(2, "0");
    const seconds = String(day.getSeconds()).padStart(2, "0");

    watch.innerText = `${date} ${weeks[week]} \n ${hours}:${minutes}:${seconds}`;
}

setInterval(currentTime, 500);
