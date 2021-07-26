<template>
  <v-app>
    <!-- START:: HEADER -->
    <TheHeader />
    <!-- END:: HEADER -->

    <router-view />

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
    title: 'E-Commerce',
    meta: [
      {
      name: 'description',
      content: "E-Commerce Description Will Go Here",
      }
    ],
  }
  // END:: VUE-META
};
</script>
