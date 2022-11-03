let writingArea = document.getElementById("text-input");
let characCount = document.getElementById("charac-count");
let bolder = document.getElementById("textB");
let italy = document.getElementById("textI");
let underl = document.getElementById("textU");
let strke = document.getElementById("textS");
let wordCount = document.getElementById("word-count");
var sentenceCase = document.getElementById("case1");
let optionsButtons = document.querySelectorAll(".option-button");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let wordFormatSelect = document.getElementById("wordFormat");

function changeCase() {
    var caser = document.getElementById("wordFormat").value;

    switch (caser) {
        case "clearCase":
            writingArea.style.textTransform = "none";
            break;
        case "sentenceCase":
            writingArea.value = writingArea.value.toLowerCase().split(' ').map((word, ) => `${word.charAt(0).toUpperCase() + word.slice(1)}`).join(' ');
            writingArea.style.textTransform = "capitalize";
            break;
        case "upperCase":
            writingArea.style.textTransform = "uppercase";
            break;
        case "lowerCase":
            writingArea.style.textTransform = "lowercase";
            break;
        default:
            alert("You problem.");
            break;
    };
};

let isSequence = false;
let origString = "";

function fullSequence() {
    if (writingArea.value == "") {
        origString = "";
        isSequence = false;
        return;
    }

    if (isSequence == true) {
        writingArea.value = origString;
        isSequence = false;
    } else {
        origString = writingArea.value;
        writingArea.value = writingArea.value.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n');
        isSequence = true;
    }
};

const initializer = () => {
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);
};

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needsRemoval) {
                let alreadyActive = false;

                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }

                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    });
};

function textBold() {
    if (bolder.classList.contains("active")) {
        writingArea.style.fontWeight = 'normal';
    } else {
        writingArea.style.fontWeight = 'bold';
    }
};

function textItalic() {
    if (italy.classList.contains("active")) {
        writingArea.style.fontStyle = 'normal';
    } else {
        writingArea.style.fontStyle = "italic";
    }
};

function textUnderline() {
    if (underl.classList.contains("active")) {
        writingArea.style.textDecoration = 'none';
    } else {
        writingArea.style.textDecoration = "underline";
    }
};

function textStrike() {
    if (strke.classList.contains("active")) {
        writingArea.style.textDecoration = 'none';
    } else {
        writingArea.style.textDecoration = "line-through";
    }
};

writingArea.addEventListener("input", (e) => {
    e.preventDefault()
    characCount.textContent = writingArea.value.length;
    let txt = writingArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});

window.onload = initializer();