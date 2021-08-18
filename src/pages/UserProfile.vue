<template>
  <div class="user_profile">
    <!-- START:: TITLE -->
    <div class="header_wraper">
      <h2>My Profile</h2>
      <span class="title_backdrop"> My Profile </span>
    </div>
    <!-- START:: TITLE -->

    <div class="container">
      <!-- START:: PROFILE TABS -->
      <div class="profile_tabs_wraper">
        <div class="row">
          <!-- START:: TABS -->
          <div class="col-12 col-md-3">
            <div class="taps">
              <router-link to="/dashboard">Dashboard</router-link>
              <router-link to="/orders">Orders</router-link>
              <router-link to="/address">Address</router-link>
              <router-link to="/account-details">Account Details</router-link>
              <router-link to="/chat">Chat</router-link>
              <router-link to="/change-password">Change Password</router-link>
              <button @click="logout">Logout</button>
            </div>
          </div>
          <!-- END:: TABS -->

          <!-- START:: TAB CONTENT -->
          <div class="col-12 col-md-9">
            <transition mode="out-in" name="fade">
              <router-view />
            </transition>
          </div>
          <!-- END:: TAB CONTENT -->
        </div>
      </div>
      <!-- END:: PROFILE TABS -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  methods: {
    logout() {
      this.$store.dispatch("remove_token");
      this.$router.replace("/");
    },
  },
};
</script>
