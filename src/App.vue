<script setup>
import Header from './components/Header.vue'
import Title from './components/Title.vue'
import Footer from './components/Footer.vue'

import './assets/styles/reset.css'   // 가장 먼저!
import './assets/styles/main.css'    // 사이트 전체 디자인
import './assets/styles/common.css'  // 자주 쓰는 클래스
</script>

<template>
  <div id="app">
    <Header />
    <Title />
    <router-view />
    <Footer />
  </div>
</template>

<style>
/* 글로벌 스타일이 있다면 여기에 추가 가능 */
</style>

