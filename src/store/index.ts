import { createStore } from 'vuex';

export default createStore({
  state: {
    conf: {},
  },
  getters: {},
  mutations: {
    setConf(store, data) {
      store.conf = data;
    },
  },
  actions: {},
  modules: {},
});
