const loadBtn = document.querySelector("#loadBtn");
const input = document.querySelector("#input");
const messageBox = document.querySelector(".messageBox");
const btn = document.querySelector("#btn");
const attempt = document.querySelector("#attempt");
const attempts = document.querySelector("#attempts");
const navbar =  document.querySelector(".navbar");
const holder = document.querySelector(".holder");
const attemptsdiv = document.querySelector("#attemptsDiv");
const result = document.querySelector("#result");
const winMessage =  document.querySelector("#win");
const statusBox = document.querySelector("#statusBox");










let attLeft;
let randomNumber = null;

loadBtn.addEventListener("click", playGame);

function playGame() {
    let min = parseInt(document.querySelector("#min").value);
    let max = parseInt(document.querySelector("#max").value);
    let diff = max-min;

    // THE GREATEST ALGORITHM
    attLeft = Math.ceil(Math.log2(diff));
    
    attempt.innerText = `${attLeft}`;
    randomNumber = Math.floor(Math.random() * (max - min) + min);
    loadGame();
}

function play() {
    let userInput = parseInt(document.getElementById("input").value);
    if (isNaN(userInput)) {
        alert("Please enter a valid value.");
        messageBox.innerText = "Enter a valid value.";
        msgRed();
        return;
    }

    if (userInput !== randomNumber) {
        if (userInput > randomNumber) {
            msgBlue();
            messageBox.innerText = "bigger number";
            attLeft = attLeft - 1;
            attempt.innerText = ` ${attLeft}`;
        } else if (userInput < randomNumber) {
            msgBlue();
            messageBox.innerText = "smaller number";
            attLeft = attLeft - 1;
            attempt.innerText = ` ${attLeft}`;
        }
    } else {
        userWin();
        return;
    }
    if (attLeft === 0) {
        userLose();
    }

    function userWin() {
    setTimeout(()=>{
winMessage.classList.remove("invisible");
result.classList.remove("invisible");

                result.classList.add("win");
    },50)
    
    messageBox.classList.add("invisible");

        input.classList.add("invisible");
    btn.classList.add("invisible");
    attempt.classList.add("invisible");
    attempts.classList.add("invisible");
statusBox.classList.add("invisible");


    attemptsdiv.classList.add("invisible");


    holder.classList.add("invisible");


    }

    function userLose() {
    setTimeout(()=>{
document.querySelector("#lose").classList.remove("invisible");
result.classList.remove("invisible");

               result.classList.add("win");
    },50)
    

    messageBox.classList.add("invisible");

        input.classList.add("invisible");
    btn.classList.add("invisible");
    attempt.classList.add("invisible");
    attempts.classList.add("invisible");
statusBox.classList.add("invisible");


    attemptsdiv.classList.add("invisible");



    attemptsdiv.classList.add("invisible");
    holder.classList.add("invisible");

    }
}

btn.addEventListener('click', play);

function loadGame() {
    input.classList.remove("invisible");
    btn.classList.remove("invisible");
    attempt.classList.remove("invisible");
    attempts.classList.remove("invisible");
statusBox.classList.remove("invisible");
    attemptsdiv.classList.remove("invisible");


   winMessage.classList.add("invisible");

    loadBtn.classList.add("invisible");
    document.querySelector("#max").classList.add("invisible");
    document.querySelector("#min").classList.add("invisible");
    navbar.classList.add("top");
    holder.classList.add("max");
}

document.querySelector("#box").style.height = window.innerHeight - 100 + "px";

function msgRed() {
    messageBox.classList.remove("invisible");
    messageBox.style.borderColor = "red";
}
function msgBlue() {
    messageBox.classList.remove("invisible");
    messageBox.style.borderColor = "blue";
    messageBox.style.backgroundColor = "#0011ff41";

}
function replay() {

        input.classList.add("invisible");
    btn.classList.add("invisible");
    attempt.classList.add("invisible");
    attempts.classList.add("invisible");
statusBox.classList.add("invisible");
    attemptsdiv.classList.add("invisible");


   winMessage.classList.remove("invisible");

    loadBtn.classList.remove("invisible");
    document.querySelector("#max").classList.remove("invisible");
    document.querySelector("#min").classList.remove("invisible");
    navbar.classList.remove("top");
    holder.classList.remove("max");
    holder.classList.remove("invisible");

    result.classList.add("invisible");
}
