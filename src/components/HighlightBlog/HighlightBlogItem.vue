<script setup>
import { ref, reactive, toRefs, onMounted,computed,watchEffect } from 'vue'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

onMounted(() => {
  getHighlightTemplate()
})
function getHighlightTemplate(){
  const targetElements = document.querySelectorAll('.template');
  targetElements.forEach((element) => {
    hljs.highlightElement(element, { language: 'javascript', theme: 'atom-one-dark' });
  });
}

// 添加模板
function addTemplate(e) {
  console.log(e, 'e')
  // 设置一个大容器元素包含所有的card
  let cardContainer = document.querySelector('.card-container')
  // 获取原始card元素
  let originalCard = document.querySelector('.card')
  // 克隆一个新的card元素出来
  let newCard = originalCard.cloneNode(true)
  // 设置card-x
  const newCardId = `card-${cardContainer.children.length + 1}`
  // 设置新的card的id:'card-x'
  newCard.setAttribute('id', newCardId)
  // 将新的card添加到总的大元素
  cardContainer.appendChild(newCard)
}
// 模板样式
function clickSelect(event) {
  console.log(event, 'event')
  const selectValue = event.target.value
  console.log(selectValue, 'selectValue')
}
</script>

<template>
  这里是HighlightBlog.vue
  <button @click="addTemplate">增加模板</button>
  <div class="card-container">
    <!-- 第一个card -->
    <div class="card">
      <!-- 上半部分 -->
      <div class="top">
        <div class="selectBox">
          <select class="selectList" @change="clickSelect">
            <option value="atom-one-dark">atom-one-dark</option>
            <option value="atom-one-ligh">atom-one-ligh</option>
            <option value="dark">dark</option>
            <option value="github-dark-dimmed-min">github-dark-dimmed-min</option>
            <option value="isbl-editor-dark-min">isbl-editor-dark-min</option>
            <option value="kimbie-light">kimbie-light</option>
            <option value="nnfx-dark">nnfx-dark</option>
            <option value="tomorrow-night-blue">tomorrow-night-blue</option>
          </select>
        </div>
        <span>
          给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。 考虑 nums
          的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过： 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums
          的大小不重要:
        </span>
      </div>
      <!-- 下半部分 -->
      <pre class="template" lang="js">
        <span>
          Array.prototype.last = function() {
            return this[this.length - 1];
          }

          const array = [1, 2, 3, 4, 5];
          const lastElement = array.last();
          console.log(lastElement,'lastElement'); // 输出 5
        </span>
      </pre>
    </div>

    <!-- 第二个card -->
    <div class="card-x">
      <!-- 上半部分 -->
      <div class="top">
        <div class="selectBox">
          <select class="selectList" @change="clickSelect">
            <option value="atom-one-dark">atom-one-dark</option>
            <option value="atom-one-ligh">atom-one-ligh</option>
            <option value="dark">dark</option>
            <option value="github-dark-dimmed-min">github-dark-dimmed-min</option>
            <option value="isbl-editor-dark-min">isbl-editor-dark-min</option>
            <option value="kimbie-light">kimbie-light</option>
            <option value="nnfx-dark">nnfx-dark</option>
            <option value="tomorrow-night-blue">tomorrow-night-blue</option>
          </select>
        </div>
        <textarea name="" id="" cols="30" rows="4" class="inputSpan" placeholder="请在这里输入题目"></textarea>
      </div>
      <!-- 下半部分 -->
      <pre class="template" lang="js" contenteditable="true">
        <span>
          Array.prototype.last = function() {
            return this[this.length - 1];
          }

          const array = [1, 2, 3, 4, 5];
          const lastElement = array.last();
          console.log(lastElement,'lastElement'); // 输出 5
        </span>
      </pre>
    </div>
  </div>
</template>

<style scoped lang='less'>
.card {
  width: auto;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  height: auto;
  border-radius: 0.8rem;
  margin: 4rem 0;

  .top {
    padding: 2rem;
    position: relative;

    .selectBox {
      position: absolute;
      right: 0;
      top: 0;

      .selectList {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }

  .template {
    border: solid #333 1px;
    position: relative;
  }
}

.card-x {
  width: auto;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  height: auto;
  border-radius: 0.8rem;
  margin: 4rem 0;

  .top {
    padding: 2rem;
    position: relative;

    .selectBox {
      position: absolute;
      right: 0;
      top: 0;

      .selectList {
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    .inputSpan {
      border: solid #333 1px;
      min-height: 4rem;
      min-width: 48rem;
      resize: none;
      display: inline-table;
      font-size: large;
      line-height: 1.5rem;

      &:focus-visible {
        outline: none;
      }
    }
  }

  .template {
    padding: 2rem;
    position: relative;
    margin: 0 2rem;

    border: solid #cb8888 1px;
    min-height: 4rem;
    min-width: 48rem;
    resize: none;
    display: inline-table;
    font-size: large;
    line-height: 1.5rem;

    &:focus-visible {
      outline: none;
    }
  }
}
</style>