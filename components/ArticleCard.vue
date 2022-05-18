<template>
  <article>
    <div>
      <img src="/imagen1.jpg" alt="" />
    </div>
    <button @click="repdoucirparar">
      <MIconPlay v-show="!isPlaying" />
      <MIconPause  v-show="isPlaying"/>
      {{ title }}
      </button>
  </article>
</template>

<script>
import { Howl, Howler } from "howler";

export default {
  props: ["title", "souceimg"],
  data() {
    return {
      sound: "",
      isPlaying: false
    };
  },
  mounted() {
    this.sound = new Howl({
      src: ["/audios/test.mp3"],
    });
  },
  methods: {
    repdoucirparar() {

      if(this.sound.Playing()){
        this.sound.pause()
        this.isPlaying = flase
      }else{
        this.sound.play();
        this.isPlaying = true
      }


      this.sound.playing() ? this.sound.pause() :this.sound.play();
    },
  },
};
</script>


<style lang="postcss">
article {
  @apply w-1/4;
}
img {
  @apply h-32;
  object-fit: cover;
}
button {
  @apply bg-gray-200 p-3 w-full my-3;
}
</style>