import { defineStore } from "pinia";

export const useCounters = defineStore("counters", {
  state: () => {
    return {
      startTime: null,
      stopTime: null,
      totalRunTime: 0,
    };
  },

  getters: {
    getTotalRunTime() {
      return this.totalRunTime;
    },
  },
});
