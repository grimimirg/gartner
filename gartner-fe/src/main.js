import { createApp } from "vue";
import { createPinia } from "pinia";

import VueLogger from "vuejs3-logger";

import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

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

app.mount("#app");
