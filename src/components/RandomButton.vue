<template>
  <button @click="$emit('refresh')" class="random-button">
    🌸 다른 꽃 보기
  </button>
</template>

<style scoped>
.random-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f4e2d8;
  border: none;
  border-radius: 8px;
  font-family: serif;
  font-size: 1rem;
  cursor: pointer;
}
</style>
