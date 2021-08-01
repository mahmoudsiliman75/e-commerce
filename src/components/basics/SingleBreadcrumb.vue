<template>
  <ul class="single-breadcrumb">
    <li>
      <router-link to="/">
        <span><HomeIcon size="1.3x" /></span>
      </router-link>
    </li>
    <li>/</li>
    <li>{{ title }}</li>
  </ul>
</template>

<script>
import { HomeIcon } from "vue-feather-icons";
export default {
  // START:: COMPS
  components: {
    HomeIcon,
  },
  props: ["title"],
  data() {
    return {};
  },
};
</script>
