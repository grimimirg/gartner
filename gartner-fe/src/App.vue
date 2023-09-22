<template>
  <div class="container-fluid py-3">
    <h1 class="display-6 text-center">Welcome to GARTNER!</h1>

    <nav class="py-2 fs-3">
      <div class="row">
        <div class="col-6 text-center border-end">
          <router-link class="text-reset" to="/statistic-report">
            <div>
              <i class="bi bi-clock-history"></i>
            </div>
          </router-link>
        </div>
        <div class="col-6 text-center">
          <router-link class="text-reset" to="/control-room">
            <div>
              <i class="bi bi-play-circle"></i>
            </div>
          </router-link>
        </div>
      </div>
    </nav>

    <div class="container px-4 py-5 my-5">
      <router-view></router-view>
    </div>
  </div>

  <footer
    class="fixed-bottom container-fluid bg-dark text-secondary px-4 py-5 text-center mt-auto text-white-50"
  ></footer>
</template>

<script>
export default {
  name: "App",
};
</script>
