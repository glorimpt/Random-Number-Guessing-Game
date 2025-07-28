let qqw = 2;

const msg = document.querySelector(".messageBox");
const score = document.querySelector("#score");

document.querySelector("#box").style.height = window.innerHeight - 100 + "px" ;


const attempt = document.getElementById("attempt");

function play() {
let min = parseInt(document.querySelector("#min").value);
let max = parseInt(document.querySelector("#max").value);
let attLeft =7;
if (isNaN(min) || isNaN(max))  {
    console.log("invalid");
}
let rn = Math.floor(Math.random() * (max - min)+min);
console.log(parseInt(rn));
    let input =  parseInt(document.getElementById("input").value);
    localStorage.setItem("num" ,rn); 
    msg.innerText = rn;

    // if(isNaN(input)) {
    //     alert("Please enter a valid value - 'SARTHAK' .");
    //     msg.innerText = "Enter a valid value.";
    //     msg.style.backgroundColor = "red";
    // }  

    if(input !== rn){
        if (input > rn) {
            msg.innerText = "bigger number";
            attLeft = attLeft-1;
            attempt.innerText = `Attemps left = ${attLeft}`;
        } else if (input < rn)  {
            msg.innerText = "smaller number";
            attLeft = attLeft-1;
            attempt.innerText = `Attemps left = ${attLeft}`;
        }
    } else{
        userWin();
    }
    
    if (attLeft === 0) {
        userLose();
    }
    function userWin() {
        msg.innerText = `You won , the number was ${rn}`;
        msg.style.backgroundColor = "green";
        score.innerText = `You scored ${attLeft}`;
    
    }
    
    function userLose() {
        msg.innerText = `You lost , the number was ${rn}`;
        msg.style.backgroundColor = "red";
        score.innerText = `You scored 0`;
    
    }

}

const btn = document.getElementById("btn");
btn.addEventListener('click' ,play);