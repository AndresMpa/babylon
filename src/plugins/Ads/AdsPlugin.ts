import MediaPlayer from "../../MediaPlayer";
import AdsGenerator, { Ad } from "./AdsGenerator";

class AdsPlugin {
  private ads: AdsGenerator;
  private player: MediaPlayer;
  private media: HTMLMediaElement;

  private currentAd: Ad;
  private adsContainer: HTMLElement;

  constructor() {
    this.ads = AdsGenerator.getInstance();
    this.adsContainer = document.createElement("div");
    this.adsContainer.classList.add("ads");
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
  }

  run(player: MediaPlayer) {
    this.player = player;
    this.player.container.appendChild(this.adsContainer);

    this.media = this.player.media;
    this.media.addEventListener("timeupdate", this.handleTimeUpdate);
  }

  private handleTimeUpdate() {
    const currentTime: number = Math.floor(this.media.currentTime);

    if (currentTime % 30 === 0) {
      this.renderAd();
    }
  }

  private renderAd() {
    if (this.currentAd) {
      return;
    }
    const ad = this.ads.getAd();
    this.currentAd = ad;
    this.adsContainer.innerHTML = `
      <a class="adsLink" href="${this.currentAd.url}" target="_blank">
        <img class="adsImg" src="${this.currentAd.imageUrl}" />
        <div class="adsInfo">
          <h5 class="adsTitle">${this.currentAd.title}</h5>
          <p class="adsBody">${this.currentAd.body}</p>
        </div>
      </a>
    `;

    setTimeout((): any => {
      this.currentAd = null;
      this.adsContainer.innerHTML = "";
    }, 5000);
    console.log(ad);
  }
}

export default AdsPlugin;
