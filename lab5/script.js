const keys = document.querySelectorAll('.key');
const noteSounds = {
    C: new Audio('sounds/C.wav'),
    D: new Audio('sounds/D.wav'),
    E: new Audio('sounds/E.wav'),
    F: new Audio('sounds/F.wav'),
    G: new Audio('sounds/G.wav'),
    A: new Audio('sounds/A.wav'),
    B: new Audio('sounds/B.wav')
};

keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.dataset.note;
        playNoteSound(note);
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'), 200);
    });
});


const keyMap = 
{
    'c': 'C',
    'd': 'D',
    'e': 'E',
    'f': 'F',
    'g': 'G',
    'a': 'A',
    'b': 'B'
};

document.addEventListener('keydown', (event)=>{
    const note = keyMap[event.key];
    if(note){
        playNoteSound(note);
        const keyElement = document.querySelector(`#key${note}`);
    }
});

function playNoteSound(note){
    if(noteSounds[note]){
        noteSounds[note].currentTime = 0;
        noteSounds[note].play();
    }
}