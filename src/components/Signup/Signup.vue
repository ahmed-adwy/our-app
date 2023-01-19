<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto border mt-4">
        <h3 class="text-center p-3">انشاء حساب</h3>
        <form @click.prevent>
          <div class="row align-items-center">
            <div class="form-group mx-auto col-8 d-block">
              <input
                type="text"
                class="form-control rounded-pill"
                placeholder="الاسم الكامل"
                v-model="name"
              />
              <span class="error-feedback" v-if="v$.name.$error">{{
                v$.name.$errors[0].$message
              }}</span>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="form-group mx-auto col-8 d-block">
              <input
                type="email"
                class="form-control rounded-pill"
                placeholder="البريد الالكتروني"
                v-model="email"
              />
              <span class="error-feedback" v-if="v$.email.$error">{{
                v$.email.$errors[0].$message
              }}</span>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="form-group col-8 mx-auto d-block">
              <input
                type="password"
                class="form-control rounded-pill"
                placeholder="كلمه المرور"
                v-model="pass"
              />
              <span class="error-feedback" v-if="v$.pass.$error">{{
                v$.pass.$errors[0].$message
              }}</span>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="form-group col-8 mx-auto">
              <button
                type="submit"
                class="btn btn-info bg-info btn-block rounded-pill"
                @click="signup()"
              >
                تسجيل
              </button>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="form-group col-8 mx-auto d-flex align-items-center">
              هل قمت بالتسجيل سابقاً؟
              <button
                class="btn btn-link text-decoration-none text-info log rounded-pill"
                @click="redirectTo({ val: 'LoginPage' })"
              >
                دخول
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "SignUpForm",
  data() {
    return {
      v$: useValidate(),
      name: "",
      pass: "",
      email: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(3) },
      pass: { required, minLength: minLength(5) },
      email: { email, required },
    };
  },
  mounted() {
    let user = localStorage.getItem("user-Info");
    if (user) {
      this.redirectTo({ val: "HomePage" });
    }
  },
  methods: {
    ...mapActions(["redirectTo"]),
    async signup() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          pass: this.pass,
        });
        if (result.status == 201) {
          // save data user in local storage
          localStorage.setItem("user-Info", JSON.stringify(result.data));
          // redirect to home page
          this.redirectTo({ val: "HomePage" });
        } else {
          console.log("error add new user");
        }
        console.log("no error");
      } else {
        console.log("error");
      }
    },
  },
};
</script>

<style scoped>
* {
  text-decoration: rtl;
  text-align: right;
  overflow: hidden;
  font-size: 20px;
}
.log {
  color: #24baef !important;
  font-size: 18px;
  font-weight: bold;
}
input:focus {
  outline: none !important;
  box-shadow: none;
}
h3 {
  font-size: 30px;
}
.error-feedback {
  color: red !important;
}
</style>
