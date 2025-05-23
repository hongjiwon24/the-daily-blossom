<template>
  <section id="lucky-flower">
    <div class="lucky wrap flex-column">
      <h1>오늘, 당신의 행운의 꽃은?</h1>
      <p>꽃잎을 하나씩 떼어주세요</p>

      <div id="petal-flower" ref="flowerRef"></div>

      <transition :name="withTransition ? 'fade' : ''" @after-leave="handleFadeOutComplete">
        <div class="result-block" v-if="resultVisible">
          <div class="result">
            <img :src="selected.image" :alt="selected.name_kr" />
            <p>{{ selected.name_kr }} - {{ selected.meaning }}</p>
          </div>
          <div class="retry-area">
            <button id="retryBtn" @click="reset">다시 하기</button>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { flowers } from '@/data/flowers.js'

const flowerRef = ref(null)
const resultVisible = ref(false)
const selected = ref({})
const withTransition = ref(true)

const petalCount = 6

function createPetals() {
  const flower = flowerRef.value
  if (!flower) return

  flower.innerHTML = ''
  flower.removeEventListener('click', onPetalClick)
  flower.addEventListener('click', onPetalClick)

  for (let i = 0; i < petalCount; i++) {
    const angle = (360 / petalCount) * i
    const petal = document.createElement('div')
    petal.className = 'petal-flower'
    petal.style.left = '50%'
    petal.style.top = '50%'
    petal.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-110px)`

    const img = document.createElement('img')
    img.src = '/img/petal_2.png'
    petal.appendChild(img)
    flower.appendChild(petal)
  }

  const center = document.createElement('img')
  center.src = '/img/flower_center.png'
  center.className = 'flower-center'
  flower.appendChild(center)
}

function onPetalClick(e) {
  const petal = e.target.closest('.petal-flower')
  if (petal && !petal.classList.contains('falling')) {
    petal.classList.add('falling')

    setTimeout(() => {
      petal.remove()
      const remaining = flowerRef.value.querySelectorAll('.petal-flower:not(.falling)')
      if (remaining.length === 0) {
        const center = flowerRef.value.querySelector('.flower-center')
        if (center) {
          center.classList.add('fade-out')
          setTimeout(() => {
            center.remove()
            setTimeout(() => {
              withTransition.value = true
              showResult()
            }, 800)
          }, 400)
        } else {
          withTransition.value = true
          showResult()
        }
      }
    }, 2500)
  }
}

function showResult() {
  const pick = flowers[Math.floor(Math.random() * flowers.length)]
  selected.value = pick
  resultVisible.value = true
}

function reset() {
  withTransition.value = false
  resultVisible.value = false
  selected.value = {}
}

function handleFadeOutComplete() {
  createPetals()
}

onMounted(() => {
  createPetals()
})
</script>




<style>
#lucky-flower {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem;
  position: relative;
  flex-direction: column;
}

.lucky {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

#petal-flower {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.petal-flower {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 83px;
  height: 86px;
  transform-origin: center center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.petal-flower img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
}

.falling {
  animation: fallWavy 2.5s ease-in forwards;
  pointer-events: none;
}

@keyframes fallWavy {
  0%   { transform: translate(-50%, -50%) translateY(0); opacity: 1; }
  25%  { transform: translate(-50%, -50%) translate(-20px, 100px) rotate(-5deg); }
  50%  { transform: translate(-50%, -50%) translate(20px, 200px) rotate(5deg); }
  75%  { transform: translate(-50%, -50%) translate(-15px, 300px) rotate(-3deg); }
  100% { transform: translate(-50%, -50%) translate(0, 550px) rotate(0); opacity: 0; }
}

/* 꽃 수술 부분 */
.flower-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  pointer-events: none;
  z-index: 2;
  opacity: 1;
  transition: opacity 0.2s ease;
}

.fade-out {
  opacity: 0;
}


/* 다시하기 버튼 */
.retry-area {
  position: static;
  z-index: 3;
}

#retryBtn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ffc107;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

#retryBtn:hover {
  background-color: #ff9800;
}


/* 꽃 추첨 결과 */
.result-block {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  z-index: 2;
}
.result img {
  width: 220px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
