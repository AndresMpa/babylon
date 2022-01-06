/*
 * Desde una clase prototype funciona igual
class MediaPlayer {
  constructor(config) {
    this.media = config.element;
  }
}
*/

function MediaPlayer(config) {
  this.media = config.element;
  this.plugins = config.plugins || [];

  this.__initPlugins__();
}

MediaPlayer.prototype.__initPlugins__ = function () {
  this.plugins.forEach((plugin) => {
    plugin.run(this);
  });
};

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.playStop = function () {
  this.media.paused ? this.play() : this.pause();
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};

MediaPlayer.prototype.volumeMute = function () {
  this.media.muted ? this.unmute() : this.mute();
};

export default MediaPlayer;
