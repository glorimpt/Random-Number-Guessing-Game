const loadBtn = document.querySelector("#load");
const input = document.querySelector("#input");
const msg = document.querySelector(".messageBox");
const score = document.querySelector("#score");
const btn = document.querySelector("#btn");
const attempt = document.querySelector("#attempt");
const attempts = document.querySelector("#attempts");


let attLeft;
let randomNumber = null;

loadBtn.addEventListener("click", playGame);

function playGame() {
    let min = parseInt(document.querySelector("#min").value);
    let max = parseInt(document.querySelector("#max").value);

    if (isNaN(min) || isNaN(max) || max <= min) {
        alert("Please enter valid min and max values (max > min).");
        return;
    }
    let difference = max -min;
    if (difference <= 5) {
        attLeft = 2;
    }else if(difference <= 10) {
        attLeft = 3;
    }else if(difference <= 50) {
        attLeft = 5;
    }else if(difference <= 100) {
        attLeft = 7;
    }
    
    
    
    attempt.innerText = ` ${attLeft}`;

    randomNumber = Math.floor(Math.random() * (max - min) + min);

    loadGame();
}

function play() {
    let userInput = parseInt(document.getElementById("input").value);
     msg.innerText = randomNumber;

    if (isNaN(userInput)) {
        alert("Please enter a valid value - 'SARTHAK' .");
        msg.innerText = "Enter a valid value.";
        msgRed();
        return;
    }

    if (userInput !== randomNumber) {
        if (userInput > randomNumber) {
            msgBlue();
            msg.innerText = "bigger number";
            attLeft = attLeft - 1;
            attempt.innerText = ` ${attLeft}`;
        } else if (userInput < randomNumber) {
            msgBlue();
            msg.innerText = "smaller number";
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
        score.innerText = `You scored ${attLeft}`;
    setTimeout(()=>{
document.querySelector("#win").classList.remove("invisible");
document.querySelector("#result").classList.remove("invisible");

                document.querySelector("#result").classList.add("win");
    },100)
    
            


            // msg.innerText = `You won, the number was ${randomNumber}`;
    msg.classList.add("invisible");

        input.classList.add("invisible");
    score.classList.remove("invisible");
    btn.classList.add("invisible");
    attempt.classList.add("invisible");
    attempts.classList.add("invisible");
    document.querySelector("#message").classList.add("invisible");


    document.querySelector("#attemptsDiv").classList.add("invisible");



    document.querySelector(".holder").classList.add("invisible");


    }

    function userLose() {
        msg.innerText = `You lost, the number was ${randomNumber}`;
        msg.style.backgroundColor = "red";
        score.innerText = `You scored 0`; 

        score.innerText = `You scored ${attLeft}`;
    setTimeout(()=>{
document.querySelector("#lose").classList.remove("invisible");
document.querySelector("#result").classList.remove("invisible");

                document.querySelector("#result").classList.add("win");
    },100)
    
            


            // msg.innerText = `You won, the number was ${randomNumber}`;
    msg.classList.add("invisible");

        input.classList.add("invisible");
    score.classList.remove("invisible");
    btn.classList.add("invisible");
    attempt.classList.add("invisible");
    attempts.classList.add("invisible");
    document.querySelector("#message").classList.add("invisible");


    document.querySelector("#attemptsDiv").classList.add("invisible");



    document.querySelector("#attemptsDiv").classList.add("invisible");
    document.querySelector(".holder").classList.add("invisible");

    }
}

btn.addEventListener('click', play);

function loadGame() {
    input.classList.remove("invisible");
    score.classList.remove("invisible");
    btn.classList.remove("invisible");
    attempt.classList.remove("invisible");
    attempts.classList.remove("invisible");
    document.querySelector("#message").classList.remove("invisible");
    document.querySelector("#attemptsDiv").classList.remove("invisible");


    document.querySelector("#win").classList.add("invisible");

    loadBtn.classList.add("invisible");
    document.querySelector("#max").classList.add("invisible");
    document.querySelector("#min").classList.add("invisible");
    document.querySelector(".navbar").classList.add("top");
    document.querySelector(".holder").classList.add("max");
}

document.querySelector("#box").style.height = window.innerHeight - 100 + "px";

function msgRed() {
    msg.classList.remove("invisible");
    msg.style.borderColor = "red";
}
function msgBlue() {
    msg.classList.remove("invisible");
    msg.style.borderColor = "blue";
    msg.style.backgroundColor = "#0011ff41";

}