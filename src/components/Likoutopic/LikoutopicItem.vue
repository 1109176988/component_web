<script setup lang='ts'>
import { ref, reactive, toRefs, onMounted } from 'vue';
import hljs from 'highlight.js';
// 一定要引入atom-one-dark.css的样式,否则显示不出来
import 'highlight.js/styles/atom-one-dark.css';
console.log(hljs, 'hljs')

onMounted(() => {
  const targetElements = document.querySelectorAll('.topic pre');
  // hljs.highlightElement(targetElement);
  targetElements.forEach((element) => {
    // hljs.highlightElement(element);
    hljs.highlightElement(element, { language: 'javascript', theme: 'atom-one-dark' });
  });
})
</script>

<template>
  <div>
    <span>这里是likoutopicItem.vue</span>
    <div class="topic">
      <span>js是没有array.last()获取数组最后一个元素方法的,请写一个相同功能的方法给js:</span>
      <pre lang="js">
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

    <div class="topic">
      <span>给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 ,

        算法的时间复杂度应该为 O(log (m+n)):</span>
      <pre lang="js">
        <span>
          let findMedianSortedArrays = function(nums1,nums2){
                console.log(nums1,'nums1')
                console.log(nums2,'nums2')
                const nums1Length = nums1.length
                const nums2Length = nums2.length
                let overAllLength = nums1Length+nums2Length
                console.log(overAllLength,'overAllLength')
                let primevalTotalArray = nums1.concat(nums2)
                console.log(primevalTotalArray,'primevalTotalArray')
                //let newAllLength = []
                for (let i = 0; i &lt; primevalTotalArray.length; i++) {
                    for (let j = i+1; j &lt; primevalTotalArray.length; j++) {
                        if (primevalTotalArray[i]>primevalTotalArray[j]) {
                            let temp = primevalTotalArray[i]
                            primevalTotalArray[i] = primevalTotalArray[j]
                            primevalTotalArray[j] = temp
                        }
                    }
                }
                console.log(primevalTotalArray,'primevalTotalArray-------')
                if(overAllLength.length != 0){
                    if(overAllLength % 2 == 1){
                        let midNumberValue = Math.floor(primevalTotalArray.length / 2)
                        let midNum = primevalTotalArray[midNumberValue]
                        console.log(midNum,'midNum单数')
                        return midNum
                    }else if(overAllLength % 2 == 0){
                        let midValue = primevalTotalArray.length / 2
                        console.log(midValue,'midValue')
                        let midNum = (primevalTotalArray[midValue]+primevalTotalArray[midValue-1]) / 2
                        console.log(midNum,'midnum双数')
                        return midNum
                    }
                }
          }
          let nums1 = [1,2,3]
          let nums2 = [5,6,7,8]
          let result = findMedianSortedArrays(nums1,nums2)
          console.log(result,'result')

          运行结果:
          (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0) 'nums1'
          _app-e2698cb1e256abb5.js:1 (4) [5, 6, 7, 8] 'nums2'
          _app-e2698cb1e256abb5.js:1 7 'overAllLength'
          _app-e2698cb1e256abb5.js:1 (7) [1, 2, 3, 5, 6, 7, 8] 'primevalTotalArray'
          _app-e2698cb1e256abb5.js:1 (7) [1, 2, 3, 5, 6, 7, 8] 'primevalTotalArray-------'
          _app-e2698cb1e256abb5.js:1 5 'midNum单数'
          _app-e2698cb1e256abb5.js:1 5 'result'
        </span>
      </pre>
    </div>

    <div class="topic">
      <span>给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。

考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：

更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要:</span>
      <pre lang="js">
        <span>
          let removeDuplicates = function(nums){
              console.log(nums,'nums')
              for (let i = 0; i &lt; nums.length; i++) {
                  //let temp = i
                  if (nums[i] == nums[i+1]) {
                      nums.splice((i+1),1)
                  }
              }
              console.log(nums,'last--nums')
              return nums
          }
          let arr = [0,1,2,3,4,4,5]
          let result = removeDuplicates(arr)
          console.log(result,'result')

          运行结果:
          [0, 1, 2, 3, 4, 4, 5] 'nums'
          _app-e2698cb1e256abb5.js:1 (6) [0, 1, 2, 3, 4, 5] 'last--nums'
          _app-e2698cb1e256abb5.js:1 (6) [0, 1, 2, 3, 4, 5] 'result'
        </span>
      </pre>
    </div>
  </div>
</template>

<style scoped>
.topic {
  width: auto;
}

.topic pre {
  border-radius: 8px;
  padding: 14px 0;
  margin: 28px 0;
  padding-right: 4rem;
}
</style>