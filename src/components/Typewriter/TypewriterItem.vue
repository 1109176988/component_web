<script setup>
import { ref, reactive, onMounted } from "vue";
onMounted(() => {
  new TypeIt("#simpleUsage", {
    strings: [
      "This is a simple string.",
      "This is a simple stringasdf",
      "This is a simple stringasdfafs",
      "This is a simple string.",
    ],
    speed: 50,
    waitUntilVisible: true,
    afterStep: function (instance) {
      instance.getElement().style.color = getRandomColor();
    },
  }).go();
});
// 设置字符串的颜色
function getRandomColor() {
  // return 'red'
  // 生成随机的RGB值
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // 将RGB值转换为十六进制表示
  const color = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  return color;
}
import TypeIt from "typeit";

onMounted(() => {
  new TypeIt("#complexUsage", {
    speed: 50,
    waitUntilVisible: true,
    loop: true,
    cursor: true,//在字符串末尾显示闪烁的光标
    // cursorChar: "<span class='cursorChar'>|<span>",//用于光标的字符。HTML也可以
  })
    .type("nvver", { delay: 300 })
    .move(-3)
    .delete(1)
    .type("e")
    .move(null, { to: "END" })
    .type(" let yees")
    .pause(300)
    .delete(2)
    .type("sterday use up to muc")
    .move(-4)
    .type("o")
    .move(null, { to: "END" })
    .type("h of today.")
    .pause(500)
    .break({ delay: 500 })
    .break({ delay: 500 })
    .type("<em>- Will Rogers</em>")
    .go();
});

onMounted(() => {
  new TypeIt("#comUsage", {
    speed: 50,
    // waitUntilVisible: true,
    // lifeLike: false,
    loop: true
  })
    .type("前")
    .pause(181)
    .type("端")
    .pause(185)
    .type("开")
    .pause(188)
    .type("发")
    .pause(1581)
    .delete(1)
    .pause(239)
    .delete(1)
    .pause(222)
    .delete(1)
    .pause(230)
    .delete(1)
    .pause(239)
    .delete(1)

    .type("工")
    .pause(181)
    .type("程")
    .pause(185)
    .type("师")
    .pause(1581)
    .delete(1)
    .pause(239)
    .delete(1)
    .pause(222)
    .delete(1)
    .pause(230)
    .delete(1)
    .pause(239)
    .delete(1)

    .type("程")
    .pause(181)
    .type("序")
    .pause(185)
    .type("员")
    .pause(1581)
    .delete(1)
    .pause(239)
    .delete(1)
    .pause(222)
    .delete(1)
    .pause(230)
    .delete(1)
    .pause(239)
    .delete(1)
    .go();
});

onMounted(() => {
  new TypeIt("#compUsage", {
    lifeLike: false,
    speed: 0,
    loop: true
  })
    .type("前")
    .pause(257)
    .type("端")
    .pause(333)
    .type("开")
    .pause(275)
    .type("发")
    .pause(1581)
    .delete(1)
    .pause(271)
    .delete(1)
    .pause(371)
    .delete(1)
    .pause(289)
    .delete(1)
    .pause(276)
    .delete(1)
    .go();
});

onMounted(() => {
  const el = document.querySelectorAll('.ti-cursor');
  console.log(el, 'el')
  el.forEach(element => {
    // element.style.color = 'red'
    // element.style.fontSize = 'large'
    // element.style.fontWeight = '800'
    // element.style.marginLeft = '0.5rem'
    Object.assign(element.style, {
      color: 'red',
      fontSize: 'large',
      fontWeight: '800',
      marginLeft: '0.5rem',
    });
  });
})
</script>

<template>
  <div>
    <span>这里是typewriter</span>
    <p id="simpleUsage" class="simpleUsage"></p>
    <p id="complexUsage" class="complexUsage"></p>
    <p id="comUsage" class="comUsage"></p>
    <p id="compUsage"></p>
  </div>
</template>

<style scoped lang="less">
.simpleUsage {
  width: auto;
  height: 8rem;
}

.complexUsage {
  width: auto;
  height: 8rem;
}

.comUsage {
  width: auto;
  height: 8rem;
}
</style>
