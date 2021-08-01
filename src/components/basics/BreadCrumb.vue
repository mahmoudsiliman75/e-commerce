<template>
  <div
    class="BreadCrumb"
    :style="'background-image: url(' + ImageBeadcrrumb + ')'"
  >
    <div class="container">
      <div class="head-breadcrumb">
        <h1>{{ data.title }}</h1>
      </div>
      <!-- START:: SINGLE BREADCRUMB -->
      <SingleBreadcrumb :title="data.title" />
      <!-- END:: SINGLE BREADCRUMB -->
    </div>
  </div>
</template>

<script>
import breadcrumb from "../../assets/media/breadcrumb/breadcrumb.jpg";
import SingleBreadcrumb from "@/components/basics/SingleBreadcrumb";
export default {
  // START:: COMPS
  components: {
    SingleBreadcrumb,
  },
  data() {
    return {
      ImageBeadcrrumb: breadcrumb,
      data: {
        title: "All Categories",
      },
    };
  },
};
</script>
