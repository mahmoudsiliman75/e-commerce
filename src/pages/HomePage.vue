<template>
  <div class="home">
    <!-- START:: SLIDER -->
    <TheSlider :sliderItems="sliderItems"/>
    <!-- END:: SLIDER -->

    <!-- START:: CATEGORIES -->
    <div class="categories">
      <div class="container">
        <!-- START:: TITLE -->
        <div class="header_wraper">
          <h2> Categories </h2>
          <span class="title_backdrop"> Categories </span>
        </div>
        <!-- START:: TITLE -->

        <div class="row justify-content-center align-items-center">
          <!-- START:: CATEGORY CAR -->
          <div 
            class="col-10 col-md-3"
            v-for=" category in Categories "
            :key=" category.id "
          >
            <CategoryCard
              :categoryType=" category.type "
              :categoryImg=" category.img "
              :categoryTxet=" category.text "
            />
          </div>
          <!-- END:: CATEGORY CAR -->
        </div>
      </div>
    </div>
    <!-- END:: CATEGORIES -->
  </div>
</template>

<script>
import TheSlider from "../components/layouts/TheSlider.vue";
import CategoryCard from "../components/basics/CategoryCard.vue";

export default {
  name: "Home",

  components: {
    TheSlider,
    CategoryCard
  },

  data() {
    return{
      // START:: SLIDER DATA
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
      // END:: SLIDER DATA


      // START:: CATEGORIES CARD DATA
      Categories: [
        {
          id: 1,
          type: "mens",
          img: "https://d-themes.com/vue/riode/demo-1/images/categories/category1.jpg",
          text: "For Men's",
        },
        {
          id: 2,
          type: "accessories",
          img: "https://d-themes.com/vue/riode/demo-1/images/categories/category2.jpg",
          text: "Accessories",
        },
        {
          id: 3,
          type: "women",
          img: "https://d-themes.com/vue/riode/demo-1/images/categories/category3.jpg",
          text: "Fashionable Women's",
        },
        {
          id: 4,
          type: "cosmetic",
          img: "https://d-themes.com/vue/riode/demo-1/images/categories/category4.jpg",
          text: "Cosmetic",
        },
      ],
      // END:: CATEGORIES CARD DATA
    }
  }
}
</script>