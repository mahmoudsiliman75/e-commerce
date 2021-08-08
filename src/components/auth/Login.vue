<template>
  <div class="auth-container login-section">
    <!-- START:: LOGIN FORM -->
    <form class="form-style">
      <div class="form-input">
        <input
          type="email"
          class="form-control"
          name="email"
          v-model="login.email"
          placeholder="Email address"
        />
      </div>

      <div class="form-input">
        <input
          :type="inputType"
          class="form-control"
          placeholder="Password"
          v-model="login.password"
        />
        <button
          type="button"
          v-if="inputType == 'password'"
          @click="changeType('text')"
        >
          <span class="icon">
            <EyeIcon size="1.2x" color="#035397" />
          </span>
        </button>
        <button
          type="button"
          v-if="inputType == 'text'"
          @click="changeType('password')"
        >
          <span class="icon">
            <EyeOffIcon size="1.2x" color="#ffaa4c" />
          </span>
        </button>
      </div>

      <div class="form-check">
        <div class="input-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Remember Me</label
          >
        </div>
        <div class="reset-password">
          <router-link to="/resetpassword">Lost your password?</router-link>
        </div>
      </div>

      <div class="btn-auth">
        <button type="button" @click="AuthForm">
          <span class="sppinerAnimation" v-if="isWaiting == true"></span>
          <span v-if="isWaiting == false">Login</span>
        </button>
      </div>
    </form>
    <div class="auth-social">
      <div class="head-social"><h5>Or Register With</h5></div>
      <ul>
        <li>
          <button type="button" class="facebook">
            <span class="icon"><i class="fab fa-facebook-f"></i></span>
          </button>
        </li>
        <li>
          <button type="button" class="twitter">
            <span class="icon"><i class="fab fa-twitter"></i></span>
          </button>
        </li>
        <li>
          <button type="button" class="google">
            <span class="icon"><i class="fab fa-google"></i></span>
          </button>
        </li>
      </ul>
    </div>
    <!-- END::  LOGIN FORM -->
  </div>
</template>

<script>
import { EyeIcon, EyeOffIcon } from "vue-feather-icons";
export default {
  name: "Login",
  // START:: COMPONENTS
  components: {
    EyeIcon,
    EyeOffIcon,
  },
  // END:: COMPONENTS

  // START:: DATA
  data() {
    return {
      inputType: "password",
      lang: localStorage.getItem("ecommerce_lang"),
      isWaiting: false,
      login: {
        email: "",
        password: "",
      },
    };
  },
  // END:: DATA

  // START:: METHODS
  methods: {
    // START:: SHOW & HIDDEN PASSWORD
    changeType(type) {
      this.inputType = type;
    },
    changeConfirmType(type) {
      this.inputTypeConfirm = type;
    },
    // END:: SHOW & HIDDEN PASSWORD

    // START:: VALID EMAIL
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    // END:: VALID EMAIL

    // START:: LOGIN METHODS
    AuthForm() {
      this.isWaiting = true;
      if (this.login.email == "") {
        this.$iziToast.error({
          message: "Email Can't Be Empty",
          position: this.$t("alertPositions"),
          rtl: false,
        });
        setTimeout(() => {
          this.isWaiting = false;
        }, 500);
      } else if (!this.validEmail(this.login.email)) {
        this.$iziToast.error({
          message: "The specified value for the email is incorrect",
          position: this.$t("alertPositions"),
          rtl: false,
        });
      } else if (this.login.password == "") {
        this.$iziToast.error({
          message: "Passsword Can't Be Empty",
          position: this.$t("alertPositions"),
          rtl: false,
        });
      }
    },
    // END:: LOGIN METHODS
  },
  // END:: METHODS
};
</script>
