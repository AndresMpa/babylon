import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import AdsPlugin from "./plugins/Ads/AdsPlugin";

// Video tag
const video: HTMLElement = document.querySelector(".videoContainer video");
const videoControl: HTMLElement = document.querySelector(".videoControl");
const principal: HTMLElement = document.querySelector(".principal");

// Buttons
const videoLength: HTMLInputElement = document.querySelector("#videoLength");
const playStop: HTMLElement = document.querySelector("#playStop");
const mute: HTMLElement = document.querySelector("#mute");

// Istance

const player = new MediaPlayer({
  element: video,
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
});

// Events
principal.onmouseover = () => {
  videoControl.style.display = "flex";
};

principal.onmouseleave = () => {
  videoControl.style.display = "none";
};

video.onclick = () => {
  playStop.innerHTML === `<i class="fas fa-play"></i>`
    ? (playStop.innerHTML = `<i class="fas fa-pause"></i>`)
    : (playStop.innerHTML = `<i class="fas fa-play"></i>`);
  player.playStop();
};

playStop.onclick = () => {
  playStop.innerHTML === `<i class="fas fa-play"></i>`
    ? (playStop.innerHTML = `<i class="fas fa-pause"></i>`)
    : (playStop.innerHTML = `<i class="fas fa-play"></i>`);
  player.playStop();
};

mute.onclick = () => {
  mute.innerHTML === `<i class="fas fa-volume-mute"></i>`
    ? (mute.innerHTML = `<i class="fas fa-volume-up"></i>`)
    : (mute.innerHTML = `<i class="fas fa-volume-mute"></i>`);
  player.volumeMute();
};

videoLength.onchange = (event: any) => {
  player.jump(event.target.value);
};

setInterval(() => {
  videoLength.valueAsNumber = player.timeSec();
}, 100);

// Service worker

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceWorker.js", { scope: "./" })
    .catch((error) => {
      console.error(error.message);
    });
}
