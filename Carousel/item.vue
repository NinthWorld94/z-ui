<template>
  <transition  :duration="{enter:3000,leave:2000}">
    <div class="car-item" v-if="slefIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import { getCurrentInstance, onMounted, reactive, toRefs, watch } from "vue";
export default {
  name: "CarItem",
  setup() {
    const instance = getCurrentInstance();
    const state = reactive({
      slefIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex,
    });
    watch(
      () => {
        return instance.parent.ctx.currentIndex;
      },
      (value) => {
        state.currentIndex = value;
      }
    );
    onMounted(() => {});
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="stylus" scoped>
.v-enter-active,
.v-leave-active
  transition: all .3s linear
.v-enter-active
  transform  translateX(100%)
.v-enter-to
  transform  translateX(0)
.v-leave-active
  transform  translateX(0)
.v-leave-to
  transform  translateX(-100%)
.car-item 
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
</style>
