<script setup lang="ts">
import { ref, reactive } from "vue";
defineProps<{
  title: string;
  type: string;
}>();

// const emits = defineEmits(["closeTheAlert"]);

// function closeAlert() {
//   console.log("点击了关闭按钮");
//   emits("closeTheAlert");
// }
const hideOrshowItem = ref(true);
function closeAlert() {
  hideOrshowItem.value = !hideOrshowItem.value;
}
</script>

<template>
  <div class="item" :class="[type, { 'transform-css': !hideOrshowItem }]">
    <span>{{ title }}</span>
    <p @click="closeAlert" class="closeicon">
      <svg
        t="1697281987826"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4001"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="14"
        height="14"
      >
        <path
          d="M899.174 154.603l-29.782-29.782-357.397 361.114-357.397-361.114-29.782 29.782 361.114 357.397-361.114 357.397 29.782 29.782 357.397-361.114 357.397 361.114 29.782-29.782-361.114-357.397z"
          p-id="4002"
          fill="#bfbfbf"
        ></path>
      </svg>
    </p>
  </div>
</template>

<style scoped lang="less">
.item {
  width: 44rem;
  height: 3rem;
  margin-top: 0;
  padding: 0.8rem 0 1rem calc(var(--section-gap) / 2);
  display: flex;
  position: relative;
  margin: 1rem 0;
  transition: opacity 0.8s ease-out;
  opacity: 1;
  .closeicon {
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 0.8rem;
  }
}
.success {
  background-color: #f1f9eb;
  color: #74c13c;
}
.info {
  background-color: #f4f4f5;
  color: #95989d;
}
.warning {
  background-color: #fcf6ec;
  color: #eab46c;
}
.error {
  background-color: #fcf0f0;
  color: #eb6b6a;
}
.transform-css {
  opacity: 0;
}
</style>
