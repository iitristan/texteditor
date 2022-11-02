let inputTextArea = document.getElementById("input-textarea");
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");
var sentenceCase = document.getElementById("case1");

function sentenceCasing() {
    inputTextArea.style.textTransform = "capitalize";
};

function fullCapital() {
    inputTextArea.style.textTransform = "uppercase";
};

function fullLower() {
    inputTextArea.style.textTransform = "lowercase";
};

function fullSequence() {
    inputTextArea.value = inputTextArea.value.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n');
};

function fullClear() {
    inputTextArea.value = "";
};

inputTextArea.addEventListener("input", (e) => {
    e.preventDefault()
    characCount.textContent = inputTextArea.value.length;
    let txt = inputTextArea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});