<script setup lang='ts'>
import DialogItem from './DialogItem.vue'
</script>

<template>
  <div>
    <DialogItem text="这是一段信息" title="提示" :showDialog="false" :hideOrshowItem="false"/>
    <DialogItem text="这是一段警告" title="警告" :showDialog="false" :hideOrshowItem="false"/>
    <DialogItem text="这是一段标题" title="标题" :showDialog="false" :hideOrshowItem="false"/>
    <DialogItem text="这是确认弹框" title="是否删除" :showDialog="false" :hideOrshowItem="false"/>
    <DialogItem text="这是一段信息" title="提示" :showDialog="false" :hideOrshowItem="false"/>
    <DialogItem text="这是一段信息" title="提示" :showDialog="false" :hideOrshowItem="false"/>
    <DialogItem text="这是一段信息" title="提示" :showDialog="false" :hideOrshowItem="false"/>
    <DialogItem text="这是一段信息" title="提示" :showDialog="false" :hideOrshowItem="false"/>
  </div>
</template>

<style scoped>
</style>