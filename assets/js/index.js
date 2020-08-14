import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins:[ 
        new AutoPlay() 
    ] 
});

const butt_Play = document.getElementById('butt_Play');
butt_Play.onclick = () => player.togglePlay();

const butt_Mute = document.getElementById('butt_Mute');
butt_Mute.onclick = () => player.toggleSound();