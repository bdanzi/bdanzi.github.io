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

    do: 261.63,
    dodiesis: 277.18,
    re: 293.66,
    rediesis: 311.13,
    mi: 329.63,
    fa: 349.23,
    fadiesis: 369.9,
    sol: 392.00,
    soldiesis: 415.30,
    la: 440.00,
    ladiesis: 466.16,
    si: 494.00
};

function playSound(key) {
    console.log('Playing: ', key);
    // const audioElement = new Audio();
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
 
