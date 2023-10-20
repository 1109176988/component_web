<script setup>
// import { createApp } from 'vue'

// const app = createApp({})


// const highlightDirective = {
//   mounted(el) {
//     el.style.backgroundColor = 'yellow';
//     console.log(el, 'el')
//   }
// }

// app.directive('highlight', highlightDirective)

// app.mount('#app')
</script>

<template>
  <div>
    <span>这里是highlight</span>
    <p v-highlight>这是一段文本用来展示highlight</p>
  </div>
</template>

<style scoped lang='less'></style>