import { type Directive, type DirectiveBinding, watchEffect, onBeforeUnmount } from "vue";

const loadingDirective: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<boolean>) {
    console.log(el, "el");
    console.log(binding, "binding");
    console.log(el.classList, "el.classList");
    // 初始化时，根据 binding.value 值添加或删除类名
    el.classList.toggle("is-loading", binding.value);

    // 创建一个响应式effect，用于监听binding.value的变化
    const updateLoading = () => {
      el.classList.toggle("is-loading", binding.value);
      el.classList.toggle("not-loading", !binding.value);
    };
    updateLoading();
    const stop = watchEffect(updateLoading);

    // 在组件卸载时停止监听binding.value的变化
    onBeforeUnmount(() => {
      stop();
    });
  },
  updated(el: HTMLElement, binding: DirectiveBinding<boolean>) {
    // 当指令的绑定值发生变化时，更新元素的类名
    el.classList.toggle("is-loading", binding.value);
    el.classList.toggle("not-loading", !binding.value);
  },
};

export default loadingDirective;
