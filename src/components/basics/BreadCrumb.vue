<template>
  <div class="BreadCrumb" :style="'background-image: url(' + image + ')'">
    <div class="container">
      <div class="head-breadcrumb">
        <h1>{{ title }}</h1>
        <p v-if="description.length != 0">{{ description }}</p>
      </div>
      <!-- START:: SINGLE BREADCRUMB -->
      <SingleBreadcrumb :title="title" />
      <!-- END:: SINGLE BREADCRUMB -->
    </div>
  </div>
</template>

<script>
import SingleBreadcrumb from "@/components/basics/SingleBreadcrumb";
export default {
  // START:: COMPS
  components: {
    SingleBreadcrumb,
  },
  props: ["title", "image", "description"],
};
</script>
