import MediaPlayer from "../../MediaPlayer";
import AdsGenerator, { Ad } from "./AdsGenerator";

class AdsPlugin {
  private ads: AdsGenerator;
  private player: MediaPlayer;
  private media: HTMLMediaElement;

  private currentAd: Ad;

  constructor() {
    this.ads = AdsGenerator.getInstance();
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
  }

  run(player: MediaPlayer) {
    this.player = player;
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
    console.log(ad);
  }
}

export default AdsPlugin;
