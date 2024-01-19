
// werking van de buttons

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");

let key1d = false;
let key2d = false;
let key3d = false;
let key4d = false;

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "d":
            key1d = true;
            c1.style.backgroundColor = "black";
            break;
    }
});

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "f":
            key2d = true;
            c2.style.backgroundColor = "black";
            break;
    }
});

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "j":
            key3d = true;
            c3.style.backgroundColor = "black";
            break;
    }
});

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "k":
            key4d = true;
            c4.style.backgroundColor = "black";
            break;
    }
});

window.addEventListener("keyup", function (event) {
    switch (event.key) {
        case "d":
            key1d = false;
            c1.style.backgroundColor = "lightskyblue";
            break;
    }
});

window.addEventListener("keyup", function (event) {
    switch (event.key) {
        case "f":
            key2d = false;
            c2.style.backgroundColor = "lightgray";
            break;
    }
});

window.addEventListener("keyup", function (event) {
    switch (event.key) {
        case "j":
            key3d = false;
            c3.style.backgroundColor = "lightskyblue";
            break;
    }
});

window.addEventListener("keyup", function (event) {
    switch (event.key) {
        case "k":
            key4d = false;
            c4.style.backgroundColor = "lightgray";
            break;
    }
});

window.addEventListener("keydown", function (event) {
    if (event.key == "d") {
        console.log("hwelo");
    }
});

// alle coords van de noten

const allNotes = [];

const noteSpawn = document.querySelector(".note-spawn");

let drop;
let dropTime;
drop = setInterval(dropNote, 2000);
let timer = 0;
dropTime = setInterval(function () {
    timer++;
    if (timer == 5) {
        clearInterval(drop);
        clearInterval(dropTime);
    }
}, 2000)

function dropNote() {
    let number = 4;
    const body = document.querySelector("body");
    const note = document.createElement("div");
    note.className = "note";
    body.appendChild(note);
    switch (number) {
        case 1:
            note.style.left = 416 + "px";
            break;
        case 2:
            note.style.left = 565 + "px";
            break;
        case 3:
            note.style.left = 714 + "px";
            break;
        case 4:
            note.style.left = 863 + "px";
    }

    let posY = 10;
    allNotes.push(posY);
    let noteIndex = allNotes.length;
    let frame;
    frame = setInterval(function () {


        if (posY > 785) {
            clearInterval(frame);
        }
        note.style.top = posY + "px";
        posY += 5;
    }, 10)
}