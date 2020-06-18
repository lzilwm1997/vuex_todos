<template>
  <div class="addInp">
    <input type="text" placeholder="请输入要添加的事项" v-model="inpContent" />
    <button @click="addTodoHandle">添加</button>
  </div>
</template>

<script>
export default {
  name: 'addTodo',
  data() {
    return {
      inpContent: ''
    }
  },
  methods: {
    addTodoHandle() {
      this.$store.dispatch('addTodo', this.inpContent)
      this.inpContent = ''
      console.log('ok')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.addInp {
  margin: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 70%;
    height: 50px;
    outline-style: none;
    padding: 15px 0;
    border: 1px solid #ccc;
    // border-radius: 25px;
    padding-left: 20px;
    margin-right: 10px;
  }
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
}
</style>
