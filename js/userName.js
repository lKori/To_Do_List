const login = document.querySelector("#login-form");
const userName = document.querySelector("#userName");
const submitName = document.querySelector("#submitName");
const h1 = document.querySelector("h1");

const USER_KEY = "user";

function movePage() {
  location.href = "./html/toDoList.html";
}

function inputUserName(event) {
  event.preventDefault();

  if (event.target[0].value) {
    localStorage.setItem("user", event.target[0].value);
    helloUser();
  } else {
    alert("Please write your name!");
  }
}

function helloUser() {
  const name = localStorage.getItem(USER_KEY);

  userName.classList.add("hidden");
  submitName.classList.add("hidden");
  h1.innerText = `Welcome ${name}!`;
  setTimeout(movePage, 2000);
}

function setUser() {
  if (localStorage.getItem(USER_KEY)) {
    helloUser();
  } else {
    login.addEventListener("submit", inputUserName);
  }
}

setUser();
