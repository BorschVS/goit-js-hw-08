import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(onTimeupdate, 1000));

function onTimeupdate() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime);
