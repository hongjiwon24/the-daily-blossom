<template>
  <div class="flower-card">
    <img :src="flower.image" :alt="flower.name_kr" />
    <p class="name">{{ flower.name_en }}</p>
  </div>
</template>

<script setup>
defineProps({
  flower: Object
})
</script>

<style scoped>
.flower-card {
  border: 1px solid #aaa;
  padding: 0.5rem;
  text-align: center;
  width: 280px;
  background-color: #fdfcf7;
}

.flower-card img {
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
}

.name {
  font-size: 14px;
  font-family: 'Noto Serif KR', serif;
}
</style>
