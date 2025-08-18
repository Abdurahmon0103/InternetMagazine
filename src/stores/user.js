// src/stores/user.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    firstName: "",
    lastName: "",
  }),
  actions: {
    setUser(first, last) {
      this.firstName = first;
      this.lastName = last;
    },
  },
});
