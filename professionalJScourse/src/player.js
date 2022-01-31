import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

// Video tag
const video = document.querySelector("video");
// Buttons
const playStop = document.querySelector("#playStop");
const mute = document.querySelector("#mute");

const player = new MediaPlayer({
  element: video,
  plugins: [new AutoPlay()],
});

playStop.onclick = () => {
  playStop.innerHTML === `<i class="fas fa-pause"></i>`
    ? (playStop.innerHTML = `<i class="fas fa-play"></i>`)
    : (playStop.innerHTML = `<i class="fas fa-pause"></i>`);
  player.playStop();
};
mute.onclick = () => {
  mute.innerHTML === `<i class="fas fa-volume-up"></i>`
    ? (mute.innerHTML = `<i class="fas fa-volume-mute"></i>`)
    : (mute.innerHTML = `<i class="fas fa-volume-up"></i>`);
  player.volumeMute();
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js").catch((error) => {
    console.error(error.message);
  })
}
