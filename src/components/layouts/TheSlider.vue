<template>
  <div class="slider-wrapper">
    <LoaderMainSlider v-if="isLoading" />
    <v-carousel hide-delimiters cycle v-else>
      <v-carousel-item v-for="(item, i) in sliderItems" :key="i">
        <img v-lazy="item.src" />
      </v-carousel-item>
      <Wave />
    </v-carousel>
  </div>
</template>

<script>
import Wave from "../ui/WaveShape.vue";
import LoaderMainSlider from "../ui/Loaders/LoaderMainSlider.vue";
export default {
  components: {
    Wave,
    LoaderMainSlider,
  },
  data() {
    return {
      isLoading: false,
    };
  },

  props: ["sliderItems"],
};
</script>
