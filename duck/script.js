let voices = [];
var synth = window.speechSynthesis;

// if ('voiceschanged' in speechSynthesis){
// synth.addEventListener('voiceschanged', function() {
//   voices = synth.getVoices();
//   console.log(voices);
// })
// } else { voices = synth.getVoices();}

synth.addEventListener('voiceschanged', function() {
  voices = synth.getVoices();
  console.log(voices);
})

// Raccolgo dalla pagina gli elementi che mi servono
const textArea = document.querySelector('.speechduck');
const playButton = document.querySelector('.buttonduck');
const pitchBar = document.querySelector('.inputduck');
const volumeBar = document.querySelector('.inputduck_volume');
const rateBar = document.querySelector('.inputduck_rate');
const duckFigure = document.querySelector('.duckfigure');

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
  const volume = volumeBar.value;
  const rate = rateBar.value;
  console.log(text)
  console.log(pitch)
  // 2 - Preparo una frase per il Sintetizzatore vocale
  const utterance = new SpeechSynthesisUtterance(text);

  // 3 - specifichiamo altri dettagli della frase
  utterance.volume = volume;
  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.lang = 'en-GB';
  const femaleVoice = voices.find(function (voice) {
    if (voice.name.includes('Samantha') || voice.name.includes('Elsa') || voice.name.includes('Alice') || voice.name.includes('Anna') || voice.name.includes('Fiona') || voice.name.includes('Female') ) {
      return true;
    }
  });

  utterance.voice = femaleVoice;

  // facciamo parlare la paperella
  synth.speak(utterance);

  // Quando la paperella inizia a parlare..
  utterance.addEventListener('start', function () {
    // Blocco tutti i controlli
    textArea.disabled = true;
    pitchBar.disabled = true;
    volumeBar.disabled = true;
    playButton.disabled = true;
    rateBar.disabled = true;

    // animiamo la paperella
    duckFigure.classList.add('talking');
  });

  // Quando la paperella finisce di parlare..
  utterance.addEventListener('end', function () {
    // Blocco tutti i controlli
    textArea.disabled = false;
    pitchBar.disabled = false;
    rateBar.disabled = false;
    volumeBar.disabled = false;
    playButton.disabled = false;

    // Riportiamo la paperella statica
    duckFigure.classList.remove('talking');
  })

}