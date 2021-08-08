<template>
  <div class="tab_content">
    <div class="address_wraper">
      <p>
        The following addresses will be used on the checkout page by default.
      </p>

      <div class="wraper">
        <h3>Shipping Addresses</h3>

        <div class="client_addresses">
          <transition mode="out-in" name="fade">
            <p v-if="ClientAddress.length == 0">
              You have not set up this type of address yet.
            </p>

            <ul class="addresses_list" v-else>
              <li v-for="address in ClientAddress" :key="address.id">
                {{ address.address }}
              </li>
            </ul>
          </transition>
        </div>

        <div class="inputs_wraper">
          <transition-group mode="out-in" name="fade">
            <div
              class="address_input my-2"
              v-for="field in fields"
              :key="field.id"
            >
              <input
                class="form-control"
                type="text"
                placeholder="Enter Your Address"
                v-model="field.address"
              />
              <button class="btn" @click="deleteField(field)">
                <Trash2Icon />
              </button>
            </div>
          </transition-group>

          <div class="btn_wraper">
            <button
              class="btn save_btn"
              @click="saveAddresses"
              v-if="fields.length == 1 || ClientAddress.length != 0"
            >
              Save Data
              <span> <SaveIcon /> </span>
            </button>
            <button class="btn" @click="addField">
              Add Address
              <span> <PlusIcon /> </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Trash2Icon, PlusIcon, SaveIcon } from "vue-feather-icons";

export default {
  name: "Address",

  components: {
    Trash2Icon,
    PlusIcon,
    SaveIcon,
  },

  data() {
    return {
      ClientAddress: [],
      fields: [],
    };
  },

  methods: {
    addField() {
      this.fields.push({
        id: new Date().getTime(),
        address: "",
      });
    },

    deleteField(item) {
      let index = this.fields.indexOf(item);
      this.fields.splice(index, 1);
    },

    saveAddresses() {
      this.ClientAddress = [...this.fields];
    },
  },
};
</script>
