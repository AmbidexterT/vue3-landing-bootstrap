<template>
  <div>
    <agile :initial-slide="0">
      <img
          class="slide"
          src="../assets/images/start.jpg">
      <img
          class="slide"
          src="../assets/images/kol2.jpg">
      <img
          class="slide"
          src="../assets/images/kol3.jpg">
      <img
          class="slide"
          src="../assets/images/kol4.jpg">
      <img
          class="slide"
          src="../assets/images/nachalo.jpg">
      <img
          class="slide"
          src="../assets/images/kol6.jpg">
      <img
          class="slide"
          src="../assets/images/kol7.jpg">
      <template v-slot:prevButton>
        <i class="fas fa-chevron-left"></i>
      </template>
      <template v-slot:nextButton>
        <i class="fas fa-chevron-right"></i>
      </template>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Jumbotron",
  components: {
    agile: VueAgile
  }
};
</script>

<style lang="scss">
@import url("https://unpkg.com/vue-agile@latest/dist/VueAgile.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css");

.agile {
  &__nav-button {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 24px;
    height: 100%;
    position: absolute;
    top: 0;
    transition-duration: 0.3s;
    width: 80px;
    &:hover {
      background-color: rgba(black, 0.5);
      opacity: 1;
    }
    &--prev {
      left: 0;
    }
    &--next {
      right: 0;
    }
  }
  &__dots {
    bottom: 10px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
  &__dot {
    margin: 0 10px;
    button {
      background-color: transparent;
      border: 1px solid white;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      height: 10px;
      font-size: 0;
      line-height: 0;
      margin: 0;
      padding: 0;
      transition-duration: 0.3s;
      width: 10px;
    }
    &--current,
    &:hover {
      button {
        background-color: white;
      }
    }
  }
}

// Slides styles
.slide {
  display: block;
  height: 680px;
  object-fit: cover;
  width: 100%;
  border-color: black;
  border-width: 2px;

  border-top-style: solid;
  border-bottom-style: solid;
}
</style>
