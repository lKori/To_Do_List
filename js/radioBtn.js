const onGoing = document.querySelector("#onGoing");
const onGoingTab = document.querySelector("#onGoingTab");
// const completed = document.querySelector("#completed");
const completedTab = document.querySelector("#completedTab");

function onGoingActive() {
    onGoing.classList.add("active");
    onGoing.classList.remove("hidden");
    completed.classList.remove("active");
    completed.classList.add("hidden");
}

function completedActive() {
    onGoing.classList.remove("active");
    onGoing.classList.add("hidden");
    completed.classList.add("active");
    completed.classList.remove("hidden");
}

onGoingActive();
onGoingTab.addEventListener("click", onGoingActive);
completedTab.addEventListener("click", completedActive);
