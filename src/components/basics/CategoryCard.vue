<template>
  <router-link :to="categoryType" class="category_link">
    <!-- START:: LOADER -->
    <LoaderCategoryCard v-if="isLoading" />
    <!-- END:: LOADER -->
    <div class="category_card_wraper" v-else>
      <img v-lazy="categoryImg" alt="Ctegory Image" width="100" height="100" />

      <div class="overlay">
        <button>{{ categoryTxet }}</button>
      </div>
    </div>
  </router-link>
</template>

<script>
import LoaderCategoryCard from "../ui/Loaders/LoaderCategoryCard.vue";
export default {
  props: ["categoryType", "categoryImg", "categoryTxet"],
  components: {
    LoaderCategoryCard,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
