window.DivyatraComponents = window.DivyatraComponents || {};

window.DivyatraComponents.prayerSounds = {
  play(soundName, button) {
    const sound = window.DivyatraComponents.prayerSounds.registry[soundName];
    if (!sound) return;

    sound.currentTime = 0;
    sound
      .play()
      .then(() => {
        button.classList.remove("ringing");
        void button.offsetWidth;
        button.classList.add("ringing");
      })
      .catch((error) => {
        console.log("Prayer sound could not play:", error);
      });
  },

  registry: {
    bell: new Audio("./assets/audio/bell.mp3"),
    fastBell: new Audio("./assets/audio/ganti.mp3"),
    shankh: new Audio("./assets/audio/shankh.mp3"),
  },
};

Object.values(window.DivyatraComponents.prayerSounds.registry).forEach((sound) => {
  sound.preload = "auto";
  sound.volume = 0.7;
});
