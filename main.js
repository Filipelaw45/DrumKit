'use strict';

const sounds = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}

const createDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.querySelector('#container').appendChild(div);
}

const putSounds = (sounds) => Object.keys(sounds).forEach(createDiv);

const addEffect = (letter) => document.getElementById(letter).classList.add('active');

const removeEffect = (letter) => {
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
}

const activateDiv = (event) => {
    const letter = event.type == 'click' ? letter = event.target.id : event.key.toUpperCase();
    const letterAllowed = sounds.hasOwnProperty(letter);
    if(letterAllowed){
        addEffect(letter);
        playSound(letter);
        removeEffect(letter);
    }
}

const playSound = (letter) => {
    const audio = new Audio(`./sounds/${sounds[letter]}`);
    audio.play();
}

putSounds(sounds);

document.querySelector('#container').addEventListener('click', activateDiv);

window.addEventListener('keydown', activateDiv);