<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="container">
    <ul class="nav">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/customer">Customer</RouterLink>
      </li>
    </ul>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
