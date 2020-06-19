<template>
  <div class="nav">
    <span
      :class="indexDefault == index ? 'active' : ''"
      v-for="(item, index) in navList"
      :key="index"
      @click="navHanle(index)"
      >{{ item }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'navagition',
  data() {
    return {
      navList: ['未完成', '已完成'],
      indexDefault: '0'
    }
  },
  methods: {
    navHanle(index) {
      this.indexDefault = index
      // 将indexDefault传入状态管理
      this.$store.dispatch('getIndex', this.indexDefault)
    }
  }
}
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
  span {
    font-size: 38px;
    padding: 10px 20px;
  }
  .active {
    border-bottom: 4px solid red;
  }
}
</style>
