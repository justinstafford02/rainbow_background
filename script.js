//could create a map or an object relationship.  objects have a key and a value, as do maps.  Objects seem to be easier to work with than maps.

const rainbowColors = {
    red: "#ff0000",
    orange: "#ffa500",
    yellow: "#ffff00",
    green: "#008000",
    blue: "#0000ff",
    indigo: "#4b0082",
    violet: "#8a2be2"
};

function checkColor() {
    let colorInput = document.getElementById("colorInput").value;

    if (colorInput in rainbowColors) {
        alert("The hex code for " + colorInput + " is " + rainbowColors[colorInput]);
        // rainbowColors[colorInput] returns the hex code of the color
        document.body.style.backgroundColor = rainbowColors[colorInput];
        // from https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
        // example from w3schools.com => document.getElementById("myDiv").style.backgroundColor = "lightblue";
    } else if (colorInput === "random") {
            // Generate a random color
        let randomBgColor = randomColor();
        alert("No problem, I'll pick a random color for you: " + randomBgColor + " Just click 'Check Color' if you want to change it.");
            document.body.style.backgroundColor = randomBgColor;
        } else {
            alert("Not a rainbow color");
        }
    }

