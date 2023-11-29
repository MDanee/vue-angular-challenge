<template>
  <div class="text-center">
    <h1 class="font-bold my-8 text-3xl text-black">{{ APP_TITLE }}</h1>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { provide } from "vue";
import { AuthenticationService } from "./service/AuthenticationService";
import { APP_TITLE } from "./constants/title.constants";

provide(typeof AuthenticationService, new AuthenticationService());
</script>
