<template>
  <sub-menu bgColor='orange'
    :style="'background-color:'+bgColor+';'">
    <template #title>{{ data.title }}</template>
    <template v-for="c of data.children">
      <menu-item :key="c.id" v-if="!c.children">
        {{ c.title }}
      </menu-item>
      <re-subMenu v-else :key="c.id" :data="c"></re-subMenu>
    </template>
  </sub-menu>
</template>

<script>
export default {
  name: "ReSubMenu",
  props: {
    data: Object,
    bgColor: {
      type: String,
      default: "#000",
    },
  },
};
</script>