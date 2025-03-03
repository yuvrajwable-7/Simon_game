let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;
    }
    levelUp();
});
function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randind = Math.floor(Math.random() * 3);
    let randcol = btns[randind];
    let randbtn = document.querySelector(`.${randcol}`);
    // console.log(randind);
    // console.log(randcol);
    // console.log(randbtn);
    gameseq.push(randcol);
    console.log(gameseq);
    gameBtnFlash(randbtn);

};
function gameBtnFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function () { 
        btn.classList.remove("gameFlash");
    }, 250);

};
function userBtnFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () { 
        btn.classList.remove("userFlash");
    }, 250);

};
function checkAns(idx) { 
    // let idx = level - 1;
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
       }
    }
    else {
        h2.innerHTML = `Game over!Your score was <b>${level}</b> <br> press any key to try again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () { 
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
};
function btnpress() {
    // console.log(this);
    let btn = this;
    userBtnFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
};
function reset() {
    started = false;
    level = 0;
    userseq = [];
    gameseq = [];
 }
