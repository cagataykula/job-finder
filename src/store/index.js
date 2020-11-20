import Vue from 'vue';
import Vuex from 'vuex';

const baseURL = `http://${window.location.host}`;

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    jobs: (state) => state.jobs,
  },
  state: {
    jobs: [],
  },
  mutations: {
    setJobs(state, data) {
      state.jobs = data;
    },
  },
  actions: {
    getJobs(store) {
      return new Promise(((resolve, reject) => {
        fetch(`${baseURL}/api/jobs.json`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.statusCode !== 200) return reject();
            store.commit('setJobs', res.result);
            return resolve(res);
          });
      }));
    },
    getJobDetail(store, id) {
      return new Promise(((resolve, reject) => {
        fetch(`${baseURL}/api/jobDetail/${id}.json`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.statusCode !== 200) return reject();
            return resolve(res.result);
          });
      }));
    },
  },
  modules: {
  },
});
