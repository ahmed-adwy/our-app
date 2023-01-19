<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">SignUp</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/login" @click="logout()">logout</router-link>
  </nav> -->
  <nav class="navbar navbar-expand-lg container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto p-0">
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">بلّغ عن شخص مفقود</a> -->
          <router-link class="nav-link" to="/missing-person"
            >بلّغ عن شخص مفقود</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/search-person"
            >بحث عن شخص مفقود</router-link
          >
        </li>
      </ul>
      <ul class="navbar-nav ml-0">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">دخول</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">تسجيل</router-link>
        </li>
        <li class="nav-item">
          <button @click="logout()" class="nav-link btn btn-info bg-info">
            خروج
          </button>
          <!-- <router-link to="/logout" class="nav-link">خروج</router-link> -->
        </li>
      </ul>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">Missing Person logo</a>
    <button
      class="navbar-toggler tex"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/ThePerson" class="nav-link"
            >الأشخاص المفقودون
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Aboutus" class="nav-link"> من نحن</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ContactUs" class="nav-link"> اتصل بنا </router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2 rounded-pill"
          type="search"
          placeholder="ابحث عن شخص مفقود"
          aria-label="Search"
        />
        <input
          class="m-2 my-sm-0 px-2 py-1 rounded-pill"
          type="submit"
          value="ابحث"
        />
      </form>
    </div>
  </nav>
  <router-view />
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["redirectTo"]),
    logout() {
      localStorage.clear();
      this.redirectTo({ val: "LoginPage" });
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300&display=swap");
* {
  direction: rtl;
  background-color: #131722 !important;
  color: #fff !important;
  font-family: "Montserrat Alternates", sans-serif !important;
  font-size: 17px;
}
input {
  color: #fff !important  ;
  border-color: #a8a8a83d !important;
}
input:focus {
  outline: none !important;
  box-shadow: none !important;
}
</style>
