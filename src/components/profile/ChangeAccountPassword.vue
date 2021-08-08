<template>
  <div class="tab_content">
    <div class="change_password_form_wraper">
      <form>
        <div class="row">
          <div class="col-12 my-2">
            <div class="wraper">
              <label for="current_pass"> Current Password </label>
              <input type="password" id="current_pass" class="form-control" v-model="changePassData.currentPass">
            </div>
          </div>

          <div class="col-12 my-2">
            <div class="wraper">
              <label for="new_pass"> New Password </label>
              <input type="password" id="new_pass" class="form-control" v-model="changePassData.newPass">
            </div>
          </div>

          <div class="col-12 my-2">
            <div class="wraper">
              <label for="confirm_pass"> Confirm New Password </label>
              <input type="password" id="confirm_pass" class="form-control" v-model="changePassData.confirmPass">
            </div>
          </div>
        </div>

        <div class="btn_wraper">
          <button class="btn"> Change </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",

  data() {
    return {
      changePassData: {
        currentPass: "",
        newPass: "",
        confirmPass: "",
      },
    }
  }
}
</script>