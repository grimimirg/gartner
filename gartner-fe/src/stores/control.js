import axios from "axios";
import { defineStore } from "pinia";
import { useReportStore } from "./report";
import { useConstantStore } from "./constants";

export const useControlStore = defineStore("control", {
  actions: {
    start() {
      toggleRun("/start");
    },
    stop() {
      toggleRun("/stop");
    },
  },
});

function toggleRun(action) {
  console.log(action);
  const constantStore = useConstantStore();
  const reportStore = useReportStore();
  axios
    .get(constantStore.baseURL + action)
    .then(() => {
      reportStore.toggleRun();
    })
    .catch(() => {});
}
