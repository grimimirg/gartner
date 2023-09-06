<template>
  <h3 class="display-6">{{ title }}</h3>
  <div class="col-lg-7">
    <p class="lead">
      <button class="btn btn-primary btn-lg button-margin" @click="start">
        {{ buttons.start }}
      </button>
      <button class="btn btn-primary btn-lg button-margin" @click="stop">
        {{ buttons.stop }}
      </button>
    </p>
  </div>
</template>

<script>
import { useConstants } from "@/store/constants";
import { useCounters } from "@/store/counters";
import { storeToRefs } from "pinia";

import axios from "axios";

export default {
  data() {
    return {
      title: "Control room",
      buttons: {
        start: "Start",
        stop: "Stop",
      },
    };
  },

  methods: {
    start() {
      const constants = storeToRefs(useConstants());
      const counters = storeToRefs(useCounters());
      axios
        .get(constants.baseURL + "/start")
        .then(() => {
          counters.startMeasuringTime();
        })
        .catch(() => {});
    },
    stop() {
      const constants = storeToRefs(useConstants());
      const counters = storeToRefs(useCounters());
      axios
        .get(constants.baseURL + "/stop")
        .then(() => {
          counters.stopMeasuringTime();
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
.button-margin {
  margin: 5px;
}
</style>
