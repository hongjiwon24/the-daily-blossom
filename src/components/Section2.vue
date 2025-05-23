<!-- 이 달의 꽃 리스트 -->
<template>
  <section class="monthly-flower">
    <div class="wrap">
        <h2>이 달의 꽃 리스트</h2>
        <div class="flower-list">
        <FlowerCard v-for="(f, i) in flowers" :key="i" :flower="f" />
        </div>
    </div>
  </section>
</template>

<script setup>
import { flowers } from '@/data/flowers.js'
import FlowerCard from '@/components/FlowerCard.vue'
</script>

<style scoped>
.monthly-flower {
  padding: 3rem 1.5rem;
}

.monthly-flower h2 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.flower-list {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.flower-card {
  
}
</style>
