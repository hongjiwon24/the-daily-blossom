
<template>
  <div class="flower-card">
    <img :src="flower.image" :alt="flower.name_kr" />
    <h3>{{ flower.name_kr }}</h3>
    <p>{{ flower.meaning }}</p>
  </div>
</template>

<script setup>
defineProps({
  flower: Object
})
</script>

<style scoped>
.flower-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  background: #fffdf8;
}
.flower-card img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
</style>