import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoLists: [],
    message: ''
  },
  mutations: {
    onAddTodo(state, val) {
      state.todoLists.push(val)
    },
    onError(state, err) {
      state.message = err
    }
  },
  actions: {
    addTodo(context, val) {
      if (val !== '') {
        context.commit('onAddTodo', val)
        context.commit('onError', '')
      } else {
        context.commit('onError', '请输入要办事项')
      }
    }
  },
  modules: {}
})
