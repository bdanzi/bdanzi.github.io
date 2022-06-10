let interactionEvent;
if('ontouchend' in document.documentElement) {
    interactionEvent = 'touchend'; 
 } else {
    interactionEvent = 'click';
 }
const keyElements = document.querySelectorAll('.key');
console.log(keyElements);

const notes = {
    do: '01-do.mp3',
    dodiesis: '02-dodiesis.mp3',
    re: '03-re.mp3',
    rediesis: '04-rediesis.mp3',
    mi: '05-mi.mp3',
    fa: '06-fa.mp3',
    fadiesis: '07-fadiesis.mp3',
    sol: '08-sol.mp3',
    soldiesis: '09-soldiesis.mp3',
    la: '10-la.mp3',
    ladiesis: '11-ladiesis.mp3',
    si: '12-si.mp3'
}

// Lista frequenze http://www.phy.mtu.edu 
const frequencies = {
    do: 233.08,
    dodiesis: 261.63,
    re: 277.18,
    rediesis: 293.66,
    mi: 311.13,
    fa: 329.63,
    fadiesis: 349.23,
    sol: 369.9,
    soldiesis: 392.00,
    la: 415.30,
    ladiesis: 440.00,
    si: 466.16
};

function playSound(key) {
    console.log('Playing: ', key);
    const audioElement = new Audio();
    const note = notes[key];
    const audioElement = new Audio('piano_app/sounds/' + note);
    audioElement.currentTime = 0;
    // audioElement.src = 'piano_app/sounds/' + note;
    audioElement.play();
}

function playSynth(key) {
    const ctx = new window.AudioContext();
    const oscillator = ctx.createOscillator();
    const note = frequencies[key];
    const length = 200;
    gainNode = ctx.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.value = note;
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start(0);
    oscillator.stop(ctx.currentTime + (length / 1000 + 0.2));
    oscillator.onended = () => ctx.close();
}

keyElements.forEach(function(keyElement) {
    keyElement.addEventListener('click', function() {
        const key = keyElement.id;
        //playSound(key);
        playSynth(key);
    });
});
 
