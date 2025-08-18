<template>
  <div class="h-screen w-screen bg-gray-100">
    <RouterView />
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { RouterView } from "vue-router";
import { createApp } from "vue";
import { createPinia } from "pinia";
</script>
<style></style>
