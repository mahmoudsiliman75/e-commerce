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

  components: {
    TheHeader,
    TheFooter,
  },

  metaInfo: {
    title: 'E-Commerce',
    meta: [
      {
      name: 'description',
      content: "E-Commerce Description Will Go Here",
      }
    ],
  }
};
</script>
