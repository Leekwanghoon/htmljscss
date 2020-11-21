const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")


const User_Ls = "currentUser",
    Showing_CN = "showing";

function saveName(text) {
    localStorage.setItem(User_Ls,text);
}

function handlesubmint(event) {
    event.preventDefault();
    // input.placeholder="바꿔~"; placeholder바꾸는법이죵
    const currentValue = input.value;
    // console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(Showing_CN);
    form.addEventListener("submit",handlesubmint)
}

function paintGreeting(text) {
    form.classList.remove(Showing_CN);
    greeting.classList.add(Showing_CN);
    greeting.innerText = `Hello ${text}`;
}


function loadName() {
    const currentUser = localStorage.getItem(User_Ls);
    if(currentUser == null) {
        askForName();
    } else {
        // 있는경우
        paintGreeting(currentUser)
    }
}

function init() {
    loadName();
}

init()