let hitval = 0;
let timer = 60;
let score = 0;
let timing;

function gethit() {
    hitval = Math.floor(Math.random() * 10);
    document.querySelector("#Hit").textContent = hitval;
}

function Makebubble() {
    let clutter = "";
    for (let i = 1; i <= 140; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".btmcontainer").innerHTML = clutter;
}

function runtimer() {
    clearInterval(timing); // Important to clear previous interval
    timing = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timer").textContent = timer;
        } else {
            clearInterval(timing);
            document.querySelector(".btmcontainer").innerHTML = `<h1>Game is over. Thank you!</h1>`;
        }
    }, 1000);
}

function incresescore() {
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

document.querySelector(".btmcontainer").addEventListener("click", function (detail) {
    const clicknum = Number(detail.target.textContent);
    if (clicknum === hitval) {
        incresescore();
        Makebubble();
        gethit();
    }
});

// Restart button
document.querySelector("#restartBtn").addEventListener("click", function () {
    score = 0;
    timer = 60;
    document.querySelector("#scorevalue").textContent = score;
    document.querySelector("#Timer").textContent = timer;
    gethit();
    Makebubble();
    runtimer();
});

// Initial setup
gethit();
Makebubble();
runtimer();
