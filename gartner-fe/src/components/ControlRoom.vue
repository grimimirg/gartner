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
import { mapActions } from "vuex";

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
    ...mapActions({
      startMeasuringTime: "startMeasuringTime",
      stopMeasuringTime: "stopMeasuringTime",
    }),
    start() {
      axios
        .get(this.$store.baseURL + "/start")
        .then(() => {
          this.$store.startMeasuringTime();
        })
        .catch(() => {});
    },
    stop() {
      axios
        .get(this.$store.baseURL + "/stop")
        .then(() => {
          this.$store.stopMeasuringTime();
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
