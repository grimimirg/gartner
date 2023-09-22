import { defineStore } from "pinia";

import { useReportStore } from "./report";
import { useConstantStore } from "./constants";

import axios from "axios";

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

//--------------------------------------------------------------------------------
// FUNCTIONS

function toggleRun(action) {
  const constantStore = useConstantStore();
  const reportStore = useReportStore();

  const builtUrl = constantStore.baseURL + action;
  this.$log.debug(builtUrl + " performing the HTTP call");

  axios
    .get(builtUrl)
    .then(() => {
      reportStore.toggleRun();
      this.$log.debug(builtUrl + " SUCCESS");
    })
    .catch((res) => {
      this.$log.error(builtUrl + " ERROR -> " + res);
    });
}
