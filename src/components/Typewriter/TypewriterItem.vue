<script setup>
import { ref, reactive, onMounted } from 'vue'
onMounted(()=>{
  new TypeIt("#simpleUsage", {
    strings: ["This is a simple string.","This is a simple stringasdf","This is a simple stringasdfafs"],
    speed: 50,
    waitUntilVisible: true,
  }).go();
})
import TypeIt from 'typeit'
</script>

<template>
  <div>
    <span>这里是typewriter</span>
    <p id="simpleUsage"></p>
  </div>
</template>

<style scoped lang='less'></style>