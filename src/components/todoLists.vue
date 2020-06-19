<template>
  <div class="todoLists">
    <template v-if="this.$store.state.defaultIndex == 0">
      <div v-if="items.length > 0">
        <div class="list" v-for="(item, index) in items" :key="index">
          <p>{{ item }}</p>
          <div class="operate">
            <button @click="successHandle(index)">完成</button>
            <button @click="deleteTodoHandle(index)" class="delete">
              删除
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="none">暂时没有添加</div>
      </div>
    </template>
    <template v-if="this.$store.state.defaultIndex == 1">
      <div v-if="successItems.length > 0">
        <div class="list" v-for="(item, index) in successItems" :key="index">
          <p>{{ item }}</p>
          <div class="operate">
            <button class="unSuccess" @click="unSuccessHandle(index)">
              未完成
            </button>
            <button class="delete" @click="delSuccessHandle(index)">
              删除
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="none">暂时没有添加</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'todlLists',
  data() {
    return {
      items: [],
      successItems: []
    }
  },
  created() {
    this.items = this.$store.state.todoLists
    this.successItems = this.$store.state.success
  },
  methods: {
    // 完成todo
    successHandle(index) {
      console.log('完成' + index)
      this.$store.dispatch('successTodo', index)
    },
    // 删除未完成todo
    deleteTodoHandle(index) {
      console.log('删除')
      this.$store.dispatch('delTodo', index)
    },
    // 将已完成添加到未完成
    unSuccessHandle(index) {
      console.log('已完成' + index)
      this.$store.dispatch('unSuccess', index)
    },
    // 删除已完成
    delSuccessHandle(index) {
      console.log('删除' + index)
      this.$store.dispatch('delSuccess', index)
    }
  }
}
</script>

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  border: 2px solid #efefee;
  padding: 15px;
  box-sizing: border-box;
  margin-top: -2px;
  p {
    font-size: 38px;
    padding: 10px 0;
  }
  .operate {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    button {
      width: 18%;
      height: 70px;
    }
    .unSuccess {
      background-color: #ccc;
    }
    .delete {
      background-color: red;
    }
  }
}
.none {
  font-size: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #eeeeee;
}
</style>
