<script setup>
import { ref, reactive, onMounted, watch, getCurrentInstance } from 'vue'

import lottie from 'lottie-web'

import loading from '../../assets/loading.json'

const animation = ref(null)

onMounted(() => {
  lottie.loadAnimation({
    container: animation.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  })
  const svgElement = document.querySelector('#svg')
  animation.value.querySelector('svg').style.height = '8rem'
  animation.value.querySelector('svg').style.transform = 'translate(0,0)'
  animation.value.querySelector('svg').style.margin = '23rem 0'
  animation.value.querySelector('svg').style.position = 'absolute'
  animation.value.querySelector('svg').style.alignItems = 'center'
  animation.value.querySelector('svg').style.justifyContent = 'center'
  animation.value.querySelector('svg').style.width = '100%'
})

const loadingShowOrHide = ref(false)

const vm = getCurrentInstance()
function showLoading() {
  loadingShowOrHide.value = !loadingShowOrHide.value
  console.log(loadingShowOrHide.value, 'loadingShowOrHide.value')
  vm.update()
}
</script>

<template>
  <div v-loading="loadingShowOrHide" ref="animation" @click="showLoading">
    <span>这里是loadingTry.vue</span>
    <span>这是一段文本用来展示loadingTry.vue</span>
  </div>
</template>

<style scoped lang='less'>
.is-loading {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #fff;
  opacity: 0.8;

  span:nth-child(1) {
    align-items: center;
    display: grid;
    justify-content: center;
    width: 100%;
    padding: 14rem 0;
    position: absolute;
  }

  span:nth-child(2) {
    align-items: center;
    display: grid;
    justify-content: center;
    width: 100%;
    padding: 17rem 0;
    position: absolute;
  }
}
</style>