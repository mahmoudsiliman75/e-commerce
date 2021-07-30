<template>
  <div class="ads_panel_wraper">
    <div class="overlay">
      <h4>
        <span class="star"> <StarIcon/> </span> 
        {{ adData.subTitle_1 }}
        <span class="star"> <StarIcon/> </span> 
      </h4>

      <h2> {{ adData.mainTitle }} </h2>

      <h4> {{ adData.subTitle_2 }} </h4>
    </div>
  </div>
</template>

<script>
import {StarIcon} from "vue-feather-icons";

export default {
  components: {
    StarIcon
  },

  props: ['adData'],
}
</script>