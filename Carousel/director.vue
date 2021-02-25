<template>
  <div class="wrap_director">
    <div class="director">
      <svg
        t="1614174955135"
        class="icon svgsty"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1817"
        width="30px"
        height="30px"
        @click="dirClick('prev')"
      >
        <path
          d="M228.894 445.741l427.67-427.67c24.095-24.095 60.236-24.095 84.33 0 24.094 24.094 24.094 60.235 0 84.329L355.388 487.906l385.506 385.506c24.094 24.094 24.094 60.235 0 84.33-24.094 24.093-60.235 24.093-84.33 0L228.895 530.07c-12.047-12.047-18.07-30.118-18.07-42.165 0-18.07 6.023-30.118 18.07-42.165z"
          p-id="1818"
        ></path>
      </svg>
    </div>
    <div class="director">
      <svg
        t="1614175584464"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1952"
        width="30px"
        height="30px"
        @click="dirClick('next')"
      >
        <path
          d="M740.894 445.741l-427.67-427.67c-24.095-24.095-60.236-24.095-84.33 0-24.094 24.094-24.094 60.235 0 84.329L614.4 487.906 228.894 873.412c-24.094 24.094-24.094 60.235 0 84.33 24.094 24.093 60.235 24.093 84.33 0l427.67-427.671c12.047-12.047 18.07-30.118 18.07-42.165 0-18.07-6.023-30.118-18.07-42.165z"
          p-id="1953"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "CarDirector",
  setup(props, ctx) {
    const dirClick = (dir) => {
      ctx.emit("dirClick", dir);
    };
    return {
      dirClick,
    };
  },
};
</script>

<style lang="stylus" scoped>
.wrap_director {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .director {
    z-index: 1;
    cursor: pointer;
  }
}
</style>
