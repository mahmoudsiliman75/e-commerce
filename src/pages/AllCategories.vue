<template>
  <div class="all-categories">
    <!-- START:: BREADCRUMB -->
    <BreadCrumb />
    <!-- END:: BREADCRUMB -->
  </div>
</template>

<script>
import BreadCrumb from "@/components/basics/BreadCrumb";
export default {
  name: "AllCategories",
  // START:: COMPONENTS
  components: {
    BreadCrumb,
  },
  // END:: COMPONENTS
  data() {
    return {};
  },
};
</script>
