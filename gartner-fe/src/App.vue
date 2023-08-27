<template>
  <div class="container-fluid py-5">
    <div class="pb-3 mb-4 border-bottom"></div>

    <div class="container">
      <h1 class="display-1">Welcome to GARTNER!</h1>
    </div>

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
  >
    <p>©2023 Andrea Grimandi</p>
  </footer>
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

<style></style>
