
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
            console.log(key1d);
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
            console.log(key1d);
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

// muziekstuk

const song = [1, 3, 2, 4, 1, 4 , 3, 3, 1];
let songIndex = 0;

// alle coords van de noten

const allNotes1 = [];
const allNotes2 = [];
const allNotes3 = [];
const allNotes4 = [];


let drop;
let dropTime;
let timer = 0;

drop = setInterval(function() {dropNote(song[songIndex])}, 1000);
dropTime = setInterval(function () {
    timer++;
    if (timer == song.length) {
        clearInterval(drop);
        clearInterval(dropTime);
    }
}, 1000)

function dropNote(number) {
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
    let noteIndex;
    switch (number) {
        case 1:
            allNotes1.push(posY);
            noteIndex = allNotes1.length - 1;
            break;
        case 2:
            allNotes2.push(posY);
            noteIndex = allNotes2.length - 1;
            break;
        case 3:
            allNotes3.push(posY);
            noteIndex = allNotes3.length - 1;
            break;
        case 4:
            allNotes4.push(posY);
            noteIndex = allNotes4.length - 1;
    }
    let frame;

    // animatie
    frame = setInterval(function () {

        if (posY > 785) {
            clearInterval(frame);
        }

        note.style.top = posY + "px";
        posY += 5;
        // het bijhouden van alle posities
        switch (number) {
            case 1:
                if (key1d == true) {
                    note.remove();
                }
                allNotes1[noteIndex] = posY;
                break;
            case 2:
                if (key2d == true) {
                    note.remove();
                }
                allNotes2[noteIndex] = posY;
                break;
            case 3:
                if (key3d == true) {
                    note.remove();
                }
                allNotes3[noteIndex] = posY;
                break;
            case 4:
                if (key4d == true) {
                    note.remove();
                }   
                allNotes4[noteIndex] = posY;
        }
    }, 10)
    songIndex++;
}