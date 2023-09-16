<template>
  <h3>{{ store.isRunning }}</h3>
</template>

<script setup>
import { useReportStore } from "@/stores/report";
const store = useReportStore();
</script>
