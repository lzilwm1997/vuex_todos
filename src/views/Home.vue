<template>
  <div class="home">
    <titleNav></titleNav>
    <addTodo />
    <navBar></navBar>
    <todoLists></todoLists>
  </div>
</template>

<script>
// @ is an alias to /src
import addTodo from '@/components/addTodo.vue'
import titleNav from '@/components/titleNav.vue'
import navBar from '@/components/nav.vue'
import todoLists from '@/components/todoLists.vue'

export default {
  name: 'Home',
  components: {
    addTodo,
    titleNav,
    navBar,
    todoLists
  }
}
</script>
<style lang="scss">
  button{
    width: 25%;
    height: 80px;
    outline-style: none;
    border: 0;
    font-size: 20px;
    background-color: #52A0F2;
    border-radius: 10px;
    color: #fff;
  }
</style>
