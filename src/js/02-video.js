import Player from '@vimeo/player';

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', onTimeUpdate);

function onTimeUpdate() {
  player.getCurrentTime().then(function (seconds) {});
}
// const json = JSON.stringify(user);

// localStorage.setItem("user", json);

// const savedData = localStorage.getItem("user");
// console.log("savedData:", savedData);

// const parsedData = JSON.parse(savedData);
// console.log("parsedData", parsedData);

// export default json;
