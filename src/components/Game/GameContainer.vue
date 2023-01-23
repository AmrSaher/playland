<template>
  <div class="game-container">
    <button class="fullscreen" @click="make_full_screen_game()">
      <BIconArrowsFullscreen />
    </button>
    <iframe
      id="game"
      src="https://krunker.io"
      frameborder="0"
      width="860"
      height="480"
      scrolling="no"
      allowfullscreen=""
    ></iframe>
  </div>
</template>

<script>
import { BIconArrowsFullscreen } from "bootstrap-icons-vue";

export default {
  name: "GameContainer",
  components: {
    BIconArrowsFullscreen,
  },
  methods: {
    make_full_screen_game() {
      var t = document.getElementById("game");
      t &&
        ("fullscreenEnabled" in document ||
          "webkitFullscreenEnabled" in document ||
          "mozFullScreenEnabled" in document ||
          "msFullscreenEnabled" in document) &&
        (document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled) &&
        ("requestFullscreen" in t
          ? t.requestFullscreen()
          : "webkitRequestFullscreen" in t
          ? t.webkitRequestFullscreen()
          : "mozRequestFullScreen" in t
          ? t.mozRequestFullScreen()
          : "msRequestFullscreen" in t && t.msRequestFullscreen());
    },
  },
};
</script>

<style lang="scss" scoped>
.game-container {
  width: fit-content;
  margin: auto;
  position: relative;
  margin-bottom: 30px;
  .fullscreen {
    position: absolute;
    top: 0;
    right: -25px;
    z-index: 99;
    border: none;
    background-color: transparent;
    color: var(--main-color);
    font-size: 25px;
    cursor: pointer;
  }
  #game {
    border: 1px solid #2b2b30;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
}
</style>
