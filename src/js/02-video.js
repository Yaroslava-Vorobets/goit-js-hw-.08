
import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
  
Update()  

player.on('timeupdate', throttle(onTimeSet, 1000));

function onTimeSet({ seconds }) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds)
}  

function Update() {
    const savedTimeSet = localStorage.getItem('LOCALSTORAGE_KEY')
        if ( !savedTimeSet === null) {
            player.setCurrentTime(savedTimeSet)
             console.log(savedTimeSet)
      }
 }
