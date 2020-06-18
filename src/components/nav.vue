<template>
  <div>
    <span v-for="(item, index) in navList" :key="index">{{ item }}</span>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data() {
    return {
      navList: ['未完成', '已完成']
    }
  }
}
</script>
