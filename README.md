# Voice Converter

A lightweight Voice Converter built using HTML, CSS, and JavaScript. This small web app demonstrates how to convert text to speech and speech to text using the browser's Web Speech APIs.

![App Screenshot](./Screenshot%202024-06-21%20004346.png)

## Features

- Text to Speech: type text and convert it to audio using built-in browser voices.
- Speech to Text: use your microphone to convert spoken words into text (live transcription).
- Simple, responsive UI with minimal dependencies — just open index.html in a browser.

## Demo / Screenshot

The screenshot above shows the app UI and available controls.

## How to run

1. Clone or download this repository.
2. Open `index.html` in a modern browser (Chrome or Edge recommended).
   - For best results, serve the folder with a local server (e.g., VS Code Live Server) to ensure microphone permissions work reliably.

## Usage

- Text to Speech
  1. Click "Text to Voice".
  2. Enter or paste text into the text area.
  3. Choose a voice from the dropdown.
  4. Click "Convert To Voice".

- Speech to Text
  1. Click "Voice to Text".
  2. Click "Start Speaking" and allow the browser to access your microphone.
  3. Speak clearly; the recognized text will appear in the readonly text area.

## Browser support & notes

- This app uses the Web Speech API (SpeechSynthesis and SpeechRecognition). Support varies by browser:
  - Chrome (desktop) and Edge: good support for SpeechSynthesis; SpeechRecognition works in Chrome.
  - Firefox: supports SpeechSynthesis but SpeechRecognition is not available.
  - Safari: partial support — SpeechSynthesis works, SpeechRecognition support is limited.
- Microphone access requires HTTPS or localhost.

## Tech stack

- HTML, CSS
- Vanilla JavaScript (Web Speech API)

## Contributing

Contributions, suggestions and improvements are welcome. Feel free to open issues or create pull requests.

## License

No license specified. If you want to make this project open source under a license, consider adding a LICENSE file (for example MIT).

---

Created and maintained by BinaryVortex
