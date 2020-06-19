import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoLists: [],
    message: '',
    success: [],
    defaultIndex: '0'
  },
  mutations: {
    // 将todo添加到共享数据
    onAddTodo(state, val) {
      state.todoLists.push(val)
    },
    onError(state, err) {
      state.message = err
    },
    onSetIndex(state, ind) {
      state.defaultIndex = ind
    },
    onSuccess(state, val) {
      state.success.push(state.todoLists[val])
      state.todoLists.splice(val, 1)
    },
    ondelTodo(state, val) {
      state.todoLists.splice(val, 1)
    },
    // 将已完成添加到未完成
    onUnSuccess(state, val) {
      state.todoLists.push(state.success[val])
      state.success.splice(val, 1)
    },
    onDelSuccess(state, val) {
      state.success.splice(val, 1)
    }
  },
  actions: {
    // 发送请求，显示已完成

    // 添加todo
    addTodo(context, val) {
      if (val !== '') {
        context.commit('onAddTodo', val)
        // 发送添加请求
        context.commit('onError', '')
      } else {
        context.commit('onError', '请输入要办事项')
      }
    },
    // 修改index
    getIndex(context, ind) {
      context.commit('onSetIndex', ind)
    },
    // 完成todo
    successTodo(context, val) {
      context.commit('onSuccess', val)
    },
    // 删除todo
    delTodo(context, val) {
      context.commit('ondelTodo', val)
    },
    // 将已完成添加到未完成
    unSuccess(context, val) {
      context.commit('onUnSuccess', val)
    },
    // 删除已完成
    delSuccess(context, val) {
      context.commit('onDelSuccess', val)
    }
  },
  modules: {}
})
