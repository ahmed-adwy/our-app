import { createStore } from "vuex";
import router from "@/router/index";
const state = {};
const getters = {};
const mutations = {
  redirectTo(state, payload) {
    router.push({ name: payload });
  },
};
const actions = {
  redirectTo({ commit }, payload) {
    commit("redirectTo", payload.val);
  },
};
const modules = {};

const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
});

export default store;
