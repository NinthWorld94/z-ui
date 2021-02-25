<template>
  <div class="no-data-tip">
    - 没有搜索到数据 -
  </div>
</template>

<script>
export default {
  name: 'NoDataTip'
}
</script>

<style lang="stylus" scoped>
  .no-data-tip {
    height: 300px;
    line-height: 300px;
    text-align: center;
    font-size: 16px;
    color: #666;
  }
</style>