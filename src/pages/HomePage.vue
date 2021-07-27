<template>
  <div class="main_content_wraper">
    <TheSlider :sliderItems="sliderItems"/>
  </div>
</template>

<script>
import TheSlider from "../components/layouts/TheSlider.vue";

export default {
  name: "Home",

  components: {
    TheSlider
  },

  data() {
    return{
      sliderItems: [
        {
          src: 'https://d-themes.com/vue/riode/demo-1/images/home/slides/slide1.jpg',
        },
        {
          src: 'https://d-themes.com/vue/riode/demo-1/images/home/slides/slide2.jpg',
        },
        {
          src: 'https://d-themes.com/vue/riode/demo-diamart/images/home/slides/1.jpg',
        }
      ],
    }
  }
}
</script>