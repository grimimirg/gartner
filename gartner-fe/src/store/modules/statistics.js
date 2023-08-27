const state = () => ({
  startTime: null,
  stopTime: null,
  totalRunTime: 0,
});

const getters = {
  getTotalRunTime(state) {
    return state.totalRunTime;
  },
};

const mutations = {
  startMeasuringTime(state) {
    state.startTime = new Date();
  },
  stopMeasuringTime(state) {
    state.stopTime = new Date();
  },
  calculateTimeDifference(state) {
    state.totalRunTime = state.stopTime.getTime() - state.startTime.getTime();
  },
};

const actions = {
  startMeasuringTime(contex) {
    contex.commit("startMeasuringTime");
  },
  stopMeasuringTime(contex) {
    contex.commit("stopMeasuringTime");
  },
  calculateTimeDifference(contex) {
    contex.commit("calculateTimeDifference");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
