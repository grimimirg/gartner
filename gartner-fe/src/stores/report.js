import { defineStore } from "pinia";

export const useReportStore = defineStore("report", {
  state: () => ({
    isRunning: false,
    lastRuntime: 0,
    lastStoptime: 1,
  }),
  actions: {
    toggleRun() {
      this.isRunning = !this.isRunning;
    },
  },
});
