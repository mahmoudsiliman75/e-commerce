<template>
  <div class="tab_content">
    <div class="dashboard_wraper">
      <p>Hello <span> User </span></p>
      From your profile dashboard you can view your
      <router-link to="/orders"> recent orders </router-link>, manage your
      shipping and billing addresses, and edit
      <router-link to="/address">
        your password and account details.</router-link
      >
    </div>

    <div class="btn_wraper">
      <router-link to="/all-categories" class="btn">
        <span> Go To Shop </span>
        <span> <ArrowRightIcon /> </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ArrowRightIcon } from "vue-feather-icons";

export default {
  name: "Dashboard",

  components: {
    ArrowRightIcon,
  },
};
</script>
