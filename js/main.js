
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



const noteSpawn = document.querySelector(".note-spawn");
setTimeout(dropNote, 2000);

function dropNote() {
    let number = 3;
    const noteContainer = document.querySelector(`.note-${number}-c`);
    const note = document.createElement("div");
    note.className = "note";
    noteContainer.appendChild(note);

    let posY = 10;
    let frame;
    frame = setInterval(function () {
        if (posY > 705) {
            clearInterval(frame);
        }
        note.style.top = posY + "px";
        posY += 4;
    }, 10)
}