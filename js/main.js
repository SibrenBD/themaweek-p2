
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");

window.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "d":
            console.log("bruh");
            c1.style.backgroundColor = "black";
            break;
    }
});

window.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "f":
            console.log("bruh");
            c2.style.backgroundColor = "black";
            break;
    }
});

window.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "j":
            console.log("bruh");
            c3.style.backgroundColor = "black";
            break;
    }
});

window.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "k":
            console.log("bruh");
            c4.style.backgroundColor = "black";
            break;
    }
});

window.addEventListener("keyup", function(event) {
    switch (event.key) {
        case "d":
            console.log("bruh");
            c1.style.backgroundColor = "lightskyblue";
            break;
    }
});

window.addEventListener("keyup", function(event) {
    switch (event.key) {
        case "f":
            console.log("bruh");
            c2.style.backgroundColor = "lightskyblue";
            break;
    }
});

window.addEventListener("keyup", function(event) {
    switch (event.key) {
        case "j":
            console.log("bruh");
            c3.style.backgroundColor = "lightskyblue";
            break;
    }
});

window.addEventListener("keyup", function(event) {
    switch (event.key) {
        case "k":
            console.log("bruh");
            c4.style.backgroundColor = "lightskyblue";
            break;
    }
});