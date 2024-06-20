const textarea = document.querySelector("#textInput"),
      voiceList = document.querySelector("#voiceSelect"),
      speechBtn = document.querySelector("#speechBtn"),
      convertToVoiceBtn = document.querySelector("#convertToVoiceBtn"),
      voiceToTextBtn = document.querySelector("#voiceToTextBtn"),
      startVoiceToTextBtn = document.querySelector("#startVoiceToTextBtn"),
      convertToVoiceForm = document.querySelector("#convertToVoiceForm"),
      voiceToTextForm = document.querySelector("#voiceToTextForm"),
      initialSelection = document.querySelector("#initialSelection"),
      mainHeader = document.querySelector("#mainHeader"),
      voiceToTextHeader = document.querySelector("#voiceToTextHeader"),
      backBtn1 = document.querySelector("#backBtn1"),
      backBtn2 = document.querySelector("#backBtn2");

let synth = speechSynthesis,
    isSpeaking = true;

// Populate voice options when voices are loaded or changed
function populateVoiceList() {
    voiceList.innerHTML = "";
    let voices = synth.getVoices();
    for(let voice of voices) {
        let option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`;
        option.setAttribute("value", voice.name);
        voiceList.appendChild(option);
    }
}

// Fetch voices when the speech synthesis is ready
speechSynthesis.onvoiceschanged = populateVoiceList;

// Handle text-to-speech conversion
function textToSpeech(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    let selectedVoice = voiceList.value;
    let voices = synth.getVoices();
    for (let voice of voices) {
        if (voice.name === selectedVoice) {
            utterance.voice = voice;
            break;
        }
    }
    synth.speak(utterance);
}

// Event listener for the "Convert to Voice" button
convertToVoiceBtn.addEventListener("click", function(event) {
    event.preventDefault();

    // Show the convert to voice form
    initialSelection.style.display = "none";
    convertToVoiceForm.style.display = "block";
    voiceToTextForm.style.display = "none";
    mainHeader.innerText = "Text To Voice Converter";

    // Handle text-to-speech conversion on button click
    speechBtn.addEventListener("click", function(event) {
        event.preventDefault();

        let text = textarea.value.trim();
        if (text !== "") {
            textToSpeech(text);
        }
    });
});

// Event listener for the "Voice to Text" button
voiceToTextBtn.addEventListener("click", function() {
    initialSelection.style.display = "none";
    convertToVoiceForm.style.display = "none";
    voiceToTextForm.style.display = "block";
    mainHeader.innerText = "";
    voiceToTextHeader.innerText = "Voice To Text Converter";
});

// Voice to Text (Speech Recognition) Functionality
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.querySelector("#voiceInput").value = transcript;
    };

    recognition.onerror = function(event) {
        console.error(event.error);
    };

    startVoiceToTextBtn.addEventListener("click", function() {
        recognition.start();
    });
} else {
    console.warn("Speech Recognition not supported in this browser.");
}

// Event listener for the "Back" button in the "Convert to Voice" form
backBtn1.addEventListener("click", function(event) {
    event.preventDefault();
    convertToVoiceForm.style.display = "none";
    initialSelection.style.display = "flex";
    mainHeader.innerText = "Voice Converter";
});

// Event listener for the "Back" button in the "Voice to Text" form
backBtn2.addEventListener("click", function(event) {
    event.preventDefault();
    voiceToTextForm.style.display = "none";
    initialSelection.style.display = "flex";
    mainHeader.innerText = "Voice Converter";
});