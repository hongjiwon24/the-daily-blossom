<!-- 당신을 맞이해 줄 오늘의 꽃 -->
<template>
  <section id="today-flower">
    <div class="info wrap">
      <h2>당신을 맞이해 줄 오늘의 꽃</h2>

      <div class="flower-info" v-if="flower">
        <img :src="flower.image" alt="꽃 이미지" />

        <div class="description flex-column">
          <h3>{{ flower.name_kr }}</h3>
          <p>“ {{ flower.meaning }} ”</p>
          <table>
            <tr><th>학명</th><td>{{ flower.name_en }}</td></tr>
            <tr><th>특징</th><td>{{ flower.features }}</td></tr>
            <tr><th>분포</th><td>{{ flower.distribution }}</td></tr>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { flowers } from '../data/flowers.js'

const flower = ref(null)

onMounted(() => {
  const random = Math.floor(Math.random() * flowers.length)
  flower.value = flowers[random]
})
</script>

<style scoped>

#today-flower {
  flex-direction: column;
  justify-content: center;
}
.info {
  display: grid;
  grid-template-rows: auto auto;
}
.info h2 {
  
}

.flower-info {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: 76px;
}
.flower-info img {
  width: 339px;
  height: 453px;
  object-fit: cover;
  grid-column: 1;
  grid-row: 1 / span 2;
}
.description {
  grid-column: 2;
  grid-row: 1 / span 2;
  justify-content: space-between;
}
.description h3 {
  text-align: center;
  margin-top: 64px;
}
.description p {
  text-align: center;

}
.description table {
  background-color: #FFF9F0;
  border-collapse: collapse;
  width: 100%;
  /* max-width: 600px; */
  border: 1px solid #ccc;
  margin-top: 40px;
}

.description table tr {

}
.description table th {
  
}
.description table td {
  
}

.description table th, td {
  text-align: center;
  vertical-align: middle;
  padding: 1.2rem 2rem;
  line-height: 1.8;
  letter-spacing: 0.03em;
  font-size: 16px;
  border: 1px solid #ddd;
}
</style>
