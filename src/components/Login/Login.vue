<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto border mt-4">
        <h1 class="text-center p-3">تسجيل الدخول</h1>
        <form @click.prevent>
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
            <div class="form-group mx-auto col-8 d-block">
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
          <div class="row align-items-cente">
            <div class="form-group col-8 mx-auto">
              <input
                type="submit"
                value="دخول"
                @click="login()"
                class="btn btn-info bg-info btn-block rounded-pill"
              />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="form-group col-8 mx-auto d-flex align-items-center">
              لم تقم بالتستجيل بعد؟
              <button
                class="btn btn-link text-decoration-none text-info log"
                @click="redirectTo({ val: 'SignUp' })"
              >
                سجل الآن
              </button>
            </div>
          </div>
          <div class="row g-3 align-items-center">
            <div class="form-group col-auto mx-auto d-block">
              {{ userNotFound }}
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
  name: "LoginForm",

  data() {
    return {
      v$: useValidate(),
      pass: "",
      email: "",
      userNotFound: "",
    };
  },
  validations() {
    return {
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
    async login() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&pass=${this.pass}`
        );
        if (result.status == 200 && result.data.length > 0) {
          localStorage.setItem("user-Info", JSON.stringify(result.data[0]));
          console.log(JSON.stringify(result.data));
          this.redirectTo({ val: "HomePage" });
        } else {
          this.userNotFound = "user not found";
        }
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
input:visited {
  background: red !important;
}
input:focus {
  outline: none !important;
  box-shadow: none;
}
</style>
