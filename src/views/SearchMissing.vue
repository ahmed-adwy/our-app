<template>
  <SearchMissing />
</template>

<script>
import { mapActions } from "vuex";
import SearchMissing from "../components/SearchForMissing/SearchForMissing.vue";
export default {
  name: "SearchMissingPage",
  components: { SearchMissing },
  async mounted() {
    let user = localStorage.getItem("user-Info");
    if (!user) {
      this.redirectTo({ val: "SignUp" });
    } else {
      this.username = JSON.parse(user).name;
      this.userId = JSON.parse(user).id;
    }
  },
  methods: {
    ...mapActions(["redirectTo"]),
  },
};
</script>

<style></style>
