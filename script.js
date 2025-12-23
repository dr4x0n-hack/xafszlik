let speech;

function readText() {
    const text = document.getElementById("content").innerText;

    speech = new SpeechSynthesisUtterance(text);
    speech.lang = "uz-UZ"; // o‘zbekcha

    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

function stopReading() {
    window.speechSynthesis.cancel();
}
