<template>
  <h3 class="display-6">{{ title }}</h3>
  <div class="row">
    <div class="col-lg-3">
      {{ getTotalRunTime() }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { useCounters } from "@/store/counters";
import { storeToRefs } from "pinia";

export default {
  data() {
    return {
      title: "Statistics",
    };
  },
  computed: {
    getTotalRunTime() {
      return useCounters().getTotalRunTime();
    },
  },
};
</script>
