function replaceWord() {
    const sentence = document.getElementById("sentence").value;
    const target = document.getElementById("target").value;
    const replacement = document.getElementById("replacement").value;
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    if (sentence === "" || target === "") {
        alert("Please enter a sentence and a word to find.");
        return;
    }

    const newSentence = sentence.replace(target, replacement);

    resultText.innerText = newSentence;
    resultContainer.style.display = "block";
}
