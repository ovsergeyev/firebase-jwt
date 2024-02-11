<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/signup">Signup</RouterLink>
      </nav>
    </div>
  </header> -->
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: auto;
  font-family: 'Arial', sans-serif;
}
</style>
