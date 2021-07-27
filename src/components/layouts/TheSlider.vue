<template>
  <v-carousel 
    hide-delimiters
    cycle
  >
    <v-carousel-item
      v-for="(item,i) in sliderItems"
      :key="i"
    >
      <img :src="item.src">
    </v-carousel-item>

    <Wave/>
  </v-carousel>
</template>

<script>
import Wave from "../ui/WaveShape.vue";

export default {
  components: {
    Wave
  },

  props: ["sliderItems"],
}
</script>