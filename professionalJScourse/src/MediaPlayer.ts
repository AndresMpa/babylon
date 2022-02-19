class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>

  constructor(config: any) {
    this.media = config.element;
    this.plugins = config.plugins || [];

    this.initPlugins();
  }

  private initPlugins() {
    // This is a good practice but
    // it is not necessary when we
    // use TS
    /*
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: () => this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(state) {
        this.media.muted = state;
      },
    };
    */
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  public timeSec() {
    return this.media.currentTime;
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  playStop() {
    this.media.paused ? this.play() : this.pause();
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }

  volumeMute() {
    this.media.muted ? this.unmute() : this.mute();
  }

  jump(jumpTarget: number) {
    this.media.currentTime = (this.media.duration * jumpTarget) / 100;
  }
}

export default MediaPlayer;
