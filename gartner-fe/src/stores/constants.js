import { defineStore } from "pinia";

export const useConstantStore = defineStore("consants", {
  state: () => ({
    baseURL: "http://localhost:5000",
    env: {
      ...PRODUCTION,
      ...TEST,
      ...DEVELOPMENT,
    },
  }),
});
