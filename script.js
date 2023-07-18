'use strict';
let play = document.querySelector('#play');
let pause = document.querySelector('#pause');
let mute = document.querySelector('#mute');
let audio = document.querySelector('#audio');

play.onclick = function() {
    audio.play()
};
pause.onclick = function() {
    audio.pause()
}
mute.onclick = function() {
    audio.muted = !audio.muted 
}
