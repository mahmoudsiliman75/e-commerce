<template>
  <div class="tab_content">
    <div class="account_details_form_wraper">
      <form>
        <div class="row">
          <div class="col-12 col-md-6 my-2">
            <div class="wraper">
              <label for="first_name"> First Name * </label>
              <input type="text" id="first_name" class="form-control" v-model="accountDetailsData.firstName">
            </div>
          </div>

          <div class="col-12 col-md-6 my-2">
            <div class="wraper">
              <label for="last_name"> Last Name * </label>
              <input type="text" id="last_name" class="form-control" v-model="accountDetailsData.lastName">
            </div>
          </div>

          <div class="col-12 my-2">
            <div class="wraper">
              <label for="email"> Email Address * </label>
              <input type="email" id="email" class="form-control" v-model="accountDetailsData.email">
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="btn_wraper">
            <button class="btn"> 
              Save 
              <span> <SaveIcon/> </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {SaveIcon} from "vue-feather-icons";
export default {
  name: "AccountDetails",

  components: {
    SaveIcon,
  },

  data() {
    return {
      accountDetailsData: {
        firstName: "",
        lastName: "",
        email: "",
      },
    }
  },
}
</script>