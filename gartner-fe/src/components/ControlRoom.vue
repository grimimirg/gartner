<template>
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
      v-on:change="
        (event) => (event.target.checked ? store.start() : store.stop())
      "
    />
    <label class="form-check-label" for="flexSwitchCheckDefault"
      >Gesù caro</label
    >
  </div>
</template>

<script setup>
import { useControlStore } from "@/stores/control";
const store = useControlStore();
</script>
<style></style>
