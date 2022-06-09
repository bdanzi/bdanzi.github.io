let voices = [];
speechSynthesis.addEventListener('voiceschanged', function () {
  voices = speechSynthesis.getVoices();
  console.log(voices);
})

// Raccolgo dalla pagina gli elementi che mi servono
const textArea = document.querySelector('speechduck');
const playButton = document.querySelector('buttonduck');
const pitchBar = document.querySelector('inputduck');
const duckFigure = document.querySelector('duckfigure');

// Se qualcuno clicca il bottone, fa' quello che ti dico.
playButton.addEventListener('click', function () {
  const textLength = textArea.value.trim().length;
  if (textLength > 0) {
    // allora fa' parlare la paperella!
    talk();
  }
});

// Preparo una funzione per far parlare la paperella
function talk() {
  // 1 - Recuperiamo tono di voce e testo
  const text = textArea.value;
  const pitch = pitchBar.value;

  // 2 - Preparo una frase per il Sintetizzatore vocale
  const utterance = new SpeechSynthesisUtterance(text);

  // 3 - specifichiamo altri dettagli della frase
  utterance.volume = 1;
  utterance.rate = 1;
  utterance.pitch = pitch;

  const femaleVoice = voices.find(function (voice) {
    if (voice.name.includes('Elsa') || voice.name.includes('Alice')) {
      return true;
    }
  });

  utterance.voice = femaleVoice;

  // facciamo parlare la paperella
  speechSynthesis.speak(utterance);

  // Quando la paperella inizia a parlare..
  utterance.addEventListener('start', function () {
    // Blocco tutti i controlli
    textArea.disabled = true;
    pitchBar.disabled = true;
    playButton.disabled = true;

    // animiamo la paperella
    duckFigure.classList.add('talking');
  });

  // Quando la paperella finisce di parlare..
  utterance.addEventListener('end', function () {
    // Blocco tutti i controlli
    textArea.disabled = false;
    pitchBar.disabled = false;
    playButton.disabled = false;

    // Riportiamo la paperella statica
    duckFigure.classList.remove('talking');
  })

}