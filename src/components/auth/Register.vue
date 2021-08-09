<template>
  <div class="auth-container register-section">
    <!-- START:: REGISTER FORM -->
    <form class="form-style">
      <div class="row">
        <div class="col-6">
          <div class="form-input">
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Name"
              v-model="register.name"
            />
          </div>
        </div>

        <div class="col-6">
          <div class="form-input">
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="Username"
              v-model="register.username"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-input">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email address"
              v-model="register.email"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-input">
            <input
              type="tel"
              class="form-control"
              name="mobile"
              placeholder="Mobile Number"
              v-model="register.mobile"
            />
          </div>
        </div>

        <div class="col-6">
          <div class="form-input">
            <input
              :type="inputType"
              class="form-control"
              placeholder="Password"
              v-model="register.password"
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
        </div>

        <div class="col-6">
          <div class="form-input">
            <input
              :type="inputTypeConfirm"
              class="form-control"
              placeholder="Confirm Password"
              v-model="register.confirmPassword"
            />
            <button
              type="button"
              v-if="inputTypeConfirm == 'password'"
              @click="changeConfirmType('text')"
            >
              <span class="icon">
                <EyeIcon size="1.2x" color="#035397" />
              </span>
            </button>
            <button
              type="button"
              v-if="inputTypeConfirm == 'text'"
              @click="changeConfirmType('password')"
            >
              <span class="icon">
                <EyeOffIcon size="1.2x" color="#ffaa4c" />
              </span>
            </button>
          </div>
        </div>

        <div class="col-12">
          <div class="form-check">
            <div class="input-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                v-model="register.checkPolicy"
              />
              <label class="form-check-label" for="exampleCheck1"
                >I agree to the privacy policy</label
              >
            </div>
          </div>
        </div>
      </div>

      <div class="btn-auth">
        <button
          type="button"
          @click="AuthForm"
          :disabled="register.checkPolicy == false"
        >
          <span class="sppinerAnimation" v-if="isWaiting == true"></span>
          <span v-if="isWaiting == false">Register</span>
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
    <!-- END::  REGISTER FORM -->
  </div>
</template>

<script>
import { EyeIcon, EyeOffIcon } from "vue-feather-icons";
export default {
  name: "register",
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
      inputTypeConfirm: "password",
      isWaiting: false,
      register: {
        name: "",
        username: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        checkPolicy: "",
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

    // END:: SHOW & HIDDEN PASSWORD
    AuthForm() {
      this.isWaiting = true;
      if (this.register.name == "") {
        this.$iziToast.error({
          message: "Name Can't Be Empty",
          position: this.$t("alertPositions"),
          rtl: false,
        });
        setTimeout(() => {
          this.isWaiting = false;
        }, 500);
      } else if (this.register.username == "") {
        this.$iziToast.error({
          message: "Username Can't Be Empty",
          position: this.$t("alertPositions"),
          rtl: false,
        });
        setTimeout(() => {
          this.isWaiting = false;
        }, 500);
      } else if (this.register.email == "") {
        this.$iziToast.error({
          message: "Email Can't Be Empty",
          position: this.$t("alertPositions"),
          rtl: false,
        });
        setTimeout(() => {
          this.isWaiting = false;
        }, 500);
      } else if (!this.validEmail(this.register.email)) {
        this.$iziToast.error({
          message: "The specified value for the email is incorrect",
          position: this.$t("alertPositions"),
          rtl: false,
        });
        setTimeout(() => {
          this.isWaiting = false;
        }, 500);
      } else if (this.register.password == "") {
        this.$iziToast.error({
          message: "Passsword Can't Be Empty",
          position: this.$t("alertPositions"),
          rtl: false,
        });
      } else if (this.register.Confirmpassword == "") {
        this.$iziToast.error({
          message: "Confirm Passsword Can't Be Empty",
          position: this.$t("alertPositions"),
          rtl: false,
        });
        setTimeout(() => {
          this.isWaiting = false;
        }, 500);
      } else if (
        ((this.register.password == "") !== this.register.Confirmpassword) ==
        ""
      ) {
        this.$iziToast.error({
          message: "Confirm Passsword Can't Be Empty",
          position: this.$t("alertPositions"),
          rtl: false,
        });
        setTimeout(() => {
          this.isWaiting = false;
        }, 500);
      }
    },
    // END:: SHOW & HIDDEN PASSWORD
  },
  // END:: METHODS
};
</script>
