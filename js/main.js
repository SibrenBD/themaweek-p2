
// werking van de buttons

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");

let key1d = false;
let key2d = false;
let key3d = false;
let key4d = false;

// posities van de noten

let pos1;
let pos2;
let pos3;
let pos4;

// punten

const score = document.querySelector(".score");
let points = 0;

function displayPoints() {
    score.innerHTML = "Score: " + points;
}

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "d":
            key1d = true;
            c1.style.backgroundColor = "black";
            if (pos1 < 820 && pos1 > 745) {
                note1.remove();
                points++;
                displayPoints();
            }
            break;
    }
});

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "f":
            key2d = true;
            c2.style.backgroundColor = "black";
            if (pos2 < 820 && pos2 > 745) {
                note2.remove();
                points++;
                displayPoints();
            }
            break;
    }
});

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "j":
            key3d = true;
            c3.style.backgroundColor = "black";
            if (pos3 < 820 && pos3 > 745) {
                note3.remove();
                points++;
                displayPoints();
            }
            break;
    }
});

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "k":
            key4d = true;
            c4.style.backgroundColor = "black";
            if (pos4 < 820 && pos4 > 745) {
                note4.remove();
                points++;
                displayPoints();
            }
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


// muziekstuk

const song = [1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2];
let songIndex = 0;

// om de noot elementen te gebruiken

let note1;
let note2;
let note3;
let note4;

// alle coords van de noten

let drop;
let dropTime;
let timer = 0;

drop = setInterval(function () { dropNote(song[songIndex]) }, 1000);
dropTime = setInterval(function () {
    timer++;
    if (timer == song.length) {
        clearInterval(drop);
        clearInterval(dropTime);
    }
}, 1000);

function dropNote(number) {
    const body = document.querySelector("body");
    const note = document.createElement("div");
    note.className = "note";
    body.appendChild(note);
    switch (number) {
        case 1:
            note1 = note;
            note.style.left = 698 + "px";
            break;
        case 2:
            note2 = note;
            note.style.left = 847 + "px";
            break;
        case 3:
            note3 = note;
            note.style.left = 996 + "px";
            break;
        case 4:
            note4 = note;
            note.style.left = 1145 + "px";
    }

    // animatie

    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;

    let posY = 10;
    let frame;

    frame = setInterval(function () {

        if (posY > 885) {
            note.remove();
            clearInterval(frame);
        }

        note.style.top = posY + "px";
        posY += 1;


        // raak check
        switch (number) {
            case 1:
                pos1 = posY;
                break;
            case 2:
                pos2 = posY;
                break;
            case 3:
                pos3 = posY;
                break;
            case 4:
                pos4 = posY;
                break;
        }




    }, 1)
    songIndex++;


}