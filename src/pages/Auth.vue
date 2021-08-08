<template>
  <div class="auth-section">
    <!-- START:: CONTAINER -->
    <div class="container">
      <!-- START:: AUTH ROUTER VIEW -->
      <div class="tabs-auth">
        <ul>
          <li><router-link to="/login">Login</router-link></li>
          <li>Or</li>
          <li><router-link to="/register">Register</router-link></li>
        </ul>
      </div>
      <!-- START:: AUTH ROUTER VIEW -->

      <!-- START:: AUTH ROUTER VIEW -->
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <!-- END:: AUTH ROUTER VIEW -->
    </div>
    <!-- END:: CONTAINER -->
  </div>
</template>

<script>
export default {
  name: "Auth",
  // START:: COMPONENTS
  components: {},
  // END:: COMPONENTS
  data() {
    return {};
  },
};
</script>
