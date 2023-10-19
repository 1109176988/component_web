<script setup lang="ts">
defineProps<{
  userName:string,
}>()

const emits = defineEmits(['logOutChildren','logInChildren'])

function handleLogOut(){
  emits('logOutChildren')
}

function handleLogIn(){
  emits('logInChildren')
}
</script>

<template>
  <div class="topbar">
    <div class="topbar-left">你好这里是topbar组件</div>
    <div class="topbar-right">当前用户: {{ userName }}</div>
    <button class="logOut" @click="handleLogOut" v-if="userName != '未登录'">退出</button>
    <button class="logIn" @click="handleLogIn" v-else="userName == '未登录'">登录</button>
  </div>
</template>

<style scoped lang="less">
.topbar {
  width: 100%;
  height: 8rem;
  // border: solid 1px #333;
  top: 0rem;
  margin: 0 auto;
  padding: 3rem 1rem;
  left: 0;
  position: fixed;
  box-shadow: 0 4px 8px #0000001a;
  .topbar-right {
    display: inline-block;
    top: 0;
    right: 4rem;
    position: absolute;
  }
  .logOut{
    display: inline-block;
    top: 0;
    right: 1rem;
    position: absolute;
  }
  .logIn{
    display: inline-block;
    top: 0;
    right: 1rem;
    position: absolute;
  }
}
</style>
