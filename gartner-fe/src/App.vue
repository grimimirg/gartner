<template>
  <div class="container-fluid py-3">
    <h1 class="display-6 text-center">Welcome to GARTNER!</h1>

    <nav class="py-2 fs-3">
      <div class="row">
        <div class="col-6 text-center border-end">
          <i class="bi bi-play-circle"></i>
        </div>
        <div class="col-6 text-center"><i class="bi bi-clock-history"></i></div>
      </div>
    </nav>

    <div class="container px-4 py-5 my-5">
      <div class="row">
        <div class="col">
          <control-room></control-room>
        </div>
        <div class="col">
          <statistic-report></statistic-report>
        </div>
      </div>
    </div>
  </div>

  <footer
    class="fixed-bottom container-fluid bg-dark text-secondary px-4 py-5 text-center mt-auto text-white-50"
  ></footer>
</template>

<script>
import ControlRoom from "./components/ControlRoom.vue";
import StatisticReport from "./components/StatisticReport.vue";

export default {
  name: "App",
  components: {
    ControlRoom,
    StatisticReport,
  },
};
</script>
