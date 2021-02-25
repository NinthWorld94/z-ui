<template>
  <div class="menu-item">
      menu-item
      <slot>
      </slot>
  </div>
</template>

<script>
export default {
    name:"MenuItem"
}
</script>

<style lang="stylus" scoped>
.menu-item
    height: 50px;
    text-align: center;
    line-height: 50px;
</style>