<template>
  <router-link :to="categoryType" class="category_link">
    <div class="category_card_wraper">
      <img :src="categoryImg" alt="Ctegory Image">

      <div class="overlay">
        <button> {{categoryTxet}} </button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["categoryType", "categoryImg", "categoryTxet"],
}
</script>