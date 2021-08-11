<template>
  <router-link :to="categoryType" class="category_link">
    <!-- START:: LOADER -->
    <LoaderCategoryCard v-if="isLoading" />
    <!-- END:: LOADER -->
    <div class="category_card_wraper" v-else>
      <img :src="categoryImg" alt="Ctegory Image" />

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
