<template>
  <section class="flower-list">
    <h2>모든 꽃 보기</h2>
    <div class="grid">
      <FlowerCard v-for="(f, i) in flowers" :key="i" :flower="f" />
    </div>
  </section>
</template>

<script setup>
import { flowers } from '../data/flowers.js'
import FlowerCard from '../components/FlowerCard.vue'
</script>

<style scoped>
.flower-list {
  padding: 2rem;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
