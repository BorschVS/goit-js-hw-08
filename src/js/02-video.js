import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime);
