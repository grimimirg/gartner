import { defineStore } from "pinia";

export const useConstants = defineStore("consants", {
  state: () => {
    return {
      baseURL: "localhost:5000",
    };
  },
});
