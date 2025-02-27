
function speak()
{
    const entertext = document.getElementById("txt").value;
    const synspeech = window.speechSynthesis;
    const error = document.querySelector(".error-para");
    if(!synspeech.speaking && entertext === ""){
        error.textContent = `! Nothing to convert,Enter text in text area !`;
    }
    if(!synspeech.speaking && entertext.trim().length)
    {
        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(entertext);
        synspeech.speak(newUtter);
    }
}