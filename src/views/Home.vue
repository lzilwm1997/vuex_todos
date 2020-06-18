<template>
  <div class="home">
    <titleNav></titleNav>
    <addTodo />
    <navBar></navBar>
  </div>
</template>

<script>
// @ is an alias to /src
import addTodo from '@/components/addTodo.vue'
import titleNav from '@/components/titleNav.vue'
import navBar from '@/components/nav.vue'

export default {
  name: 'Home',
  components: {
    addTodo,
    titleNav,
    navBar
  }
}
</script>
<style lang="scss"></style>
