
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

let points = 0;

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "d":
            key1d = true;
            c1.style.backgroundColor = "black";
            if (pos1 < 800 && pos1 > 770) {
                points++;
                console.log(points);
            }
            break;
    }
});

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "f":
            key2d = true;
            c2.style.backgroundColor = "black";
            if (pos2 < 800 && pos2 > 770) {
                points++;
                console.log(points);
            }
            break;
    }
});

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "j":
            key3d = true;
            c3.style.backgroundColor = "black";
            if (pos3 < 800 && pos3 > 770) {
                points++;
                console.log(points);
            }
            break;
    }
});

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "k":
            key4d = true;
            c4.style.backgroundColor = "black";
            if (pos4 < 800 && pos4 > 770) {
                points++;
                console.log(points);
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

const song = [1, 3, 2, 4, 1, 4, 3, 2, 1];
let songIndex = 0;



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