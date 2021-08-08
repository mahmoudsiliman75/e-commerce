<template>
  <v-app>
    <!-- START:: HEADER -->
    <TheHeader />
    <!-- END:: HEADER -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!-- START:: FOOTER -->
    <TheFooter />
    <!-- END:: FOOTER -->
  </v-app>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheFooter from "./components/layouts/TheFooter.vue";

export default {
  name: "App",

  // START:: COMPONENTS DECLERATION
  components: {
    TheHeader,
    TheFooter,
  },
  // END:: COMPONENTS DECLERATION

  // START:: VUE-META
  metaInfo: {
    title: "E-Commerce",
    meta: [
      {
        name: "description",
        content: "E-Commerce Description Will Go Here",
      },
    ],
  },
  // END:: VUE-META

  // START:: MOUNTED LIFE HOOK
  mounted() {
    let dashboard_lang = localStorage.getItem("ecommerce_lang");
    if (!dashboard_lang) {
      localStorage.setItem("ecommerce_lang", "en");
      this.$i18n.locale = "en";
    } else {
      this.$i18n.locale = localStorage.getItem("ecommerce_lang");
    }
  },
  // END:: MOUNTED LIFE HOOK
};
</script>
