const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const micBtn = document.getElementById('microphone-codigotchi');
const screen = document.getElementById('screen-codigotchi');
const panelsData = document.getElementById('panels-data-codigotchi');

const commands = ['mangia', 'balla', 'dormi'];
const commands_it = ['mangia', 'balla', 'dormi'];
const commands_en = ['eat','dance','sleep'];

// Inizializzazione
const recognition = new SpeechRecognition();

function onStartListening() {
    recognition.start();    
    panelsData.classList.add('listening');
}

function onResult(e) {    
    const testo = e.results[0][0].transcript;

    const action = commands.find(function(command) {
        console.log(testo)
        return testo.toLowerCase().includes(command);
    });

    const actionClassname = 'codigotchi-screen_' + action;
    const audioElement = new Audio('codigotchi/sounds/' + action + '.mp3');
    audioElement.currentTime = 0;
    audioElement.play();
    screen.classList.add(actionClassname);
    panelsData.classList.remove('listening');
    
    // Mostro l'animazione della gif per 2 secondi
    setTimeout(function() {
        audioElement.pause();
        audioElement.currentTime = 0;
        screen.classList.remove(actionClassname);
    }, 2000);
}

function onError(e) {
    console.error(e.error);
}

micBtn.addEventListener('click', onStartListening);
recognition.addEventListener('result', onResult);
recognition.addEventListener('error', onError);
