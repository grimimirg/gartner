import { createApp } from "vue";
import { createPinia } from "pinia";

import VueLogger from "vuejs3-logger";
import * as VueRouter from "vue-router";

import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import { routes } from "./routes/routes";

const app = createApp(App);
const pinia = createPinia();

// store
app.use(pinia);

// logger
app.use(VueLogger, {
  isEnabled: true,
  stringifyArguments: true,
  separator: "-",
  showConsoleColors: true,
});

app.use(
  VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  })
);

app.mount("#app");
