<!-- 당신을 맞이해 줄 오늘의 꽃 -->
<template>
  <section id="today-flower">
    <h2>당신을 맞이해 줄 오늘의 꽃</h2>

    <div class="flower-info" v-if="flower">
      <img :src="flower.image" alt="꽃 이미지" />

      <div class="description">
        <h3>{{ flower.name_kr }}</h3>
        <p>“ {{ flower.meaning }} ”</p>
        <table>
          <tr><th>학명</th><td>{{ flower.name_en }}</td></tr>
          <tr><th>특징</th><td>{{ flower.features }}</td></tr>
          <tr><th>분포</th><td>{{ flower.distribution }}</td></tr>
        </table>
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

}
#today-flower h2 {

}
.flower-info {

}
.flower-info img {
  width: 400px;
}
.description {

}
.description h3 {
  
}
.description p {

}
.description table {

}
.description table tr {

}
.description table th {
  
}
.description table td {
  
}
</style>
