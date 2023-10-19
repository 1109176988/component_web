<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";

const props = defineProps<{
  title: string;
  text: string;
  hideOrshowItem: boolean;
}>();
const { hideOrshowItem } = toRefs(props)
const emits = defineEmits(["update:hideOrshowItem"]) // 定义事件

function closeAlert() {
  // hideOrshowItem.value = !hideOrshowItem.value; 
  emits("update:hideOrshowItem", false)
  // console.log(hideOrshowItem.value, "hideorshowitem");
}
function showDialog() {
  console.log("展示dialog");
  emits("update:hideOrshowItem", true)
  // hideOrshowItem.value = true;
}
function clickButtonCancle() {
  console.log("点击按钮");
  // hideOrshowItem.value = !hideOrshowItem.value;
  emits("update:hideOrshowItem", !hideOrshowItem.value);
  // console.log(hideOrshowItem.value, "hideorshowitem");
}
function clickButtonSubmit() {
  console.log('点击确定按钮')
  emits("update:hideOrshowItem", !hideOrshowItem.value)
  
}
</script>

<template>
  <div>
    <a @click="showDialog">点击打开 Dialog</a>
    <div class="wrapper" :class="{ 'dialog-style': !hideOrshowItem }"></div>
    <div class="white-box" :class="{ 'dialog-style': !hideOrshowItem }">
      <div class="headline">
        <span>{{ title }}</span>
        <svg t="1697281987826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="4001" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14" @click="closeAlert()">
          <path
            d="M899.174 154.603l-29.782-29.782-357.397 361.114-357.397-361.114-29.782 29.782 361.114 357.397-361.114 357.397 29.782 29.782 357.397-361.114 357.397 361.114 29.782-29.782-361.114-357.397z"
            p-id="4002" fill="#bfbfbf"></path>
        </svg>
      </div>
      <div class="text">{{ text }}</div>
      <div class="footer">
        <button class="btn" @click="clickButtonCancle">取消</button>
        <button class="btn" @click="clickButtonSubmit">确定</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  width: 100%;
  height: 100%;
  border: solid 1px #333;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #333;
  opacity: 0.5;
}

.white-box {
  border: solid 1px #888;
  width: 28rem;
  height: 14rem;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);

  .headline {
    padding: 1rem;

    svg {
      cursor: pointer;
      position: absolute;
      right: 1rem;
      top: 0.8rem;
    }
  }

  .text {
    padding: 1.5rem 1rem;
  }

  .footer {
    padding: 1rem 1rem 0.5rem 1rem;
    // padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;

    .btn:nth-child(1) {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #333;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      margin-right: 1rem;

      &:hover {
        color: #409eff;
        border-color: #ecf5ff;
        background-color: #ecf5ff;
      }
    }

    .btn:nth-child(2) {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #333;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      margin-right: 1rem;
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;

      &:hover {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
      }
    }
  }
}

.dialog-style {
  display: none;
}
</style>
