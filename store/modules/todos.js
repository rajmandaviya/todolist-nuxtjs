export const namespaced = true

export const state = {
  todos: [],
  todo: null
}

export const mutations = {
  RESET_TODO(state) {
    state.todo = null
  },
  SET_TODO(state, todo) {
    state.todo = todo
  },
  SET_TODOS(state, todos) {
    state.todos = todos
  },
  ADD_TODO(state, todo) {
    state.todos.push(todo)
  },
  CHANGE_TODO_STATUS(state, index) {
    console.log('Data', state.todos[index])
    state.todos[index].completed = !state.todos[index].completed
  },
  UPDATE_TODO(state, data) {
    state.todos[data.index].title = data.title
  },
  REMOVE_TODO(state, todo) {
    const index = state.todos.indexOf(todo)
    state.todos.splice(index, 1)
  }
}

export const actions = {
  resetTodo({ commit }) {
    commit('RESET_TODO')
  },
  async setTodo({ commit }, id) {
    try {
      const { data } = await this.$axios.get(`/todos/${id}`)
      if (data) commit('SET_TODO', data)
    } catch (error) {
      // TODO notif error
    }
  },
  async setTodos({ commit }) {
    try {
      if (data) commit('SET_TODOS', data)
    } catch (error) {
      // TODO notif error
    }
  },
  async addTodo({ commit }, todo) {
    try {
      if (todo) commit('ADD_TODO', todo)
    } catch (error) {
      // TODO notif error
    }
  },
  async changeStatus({ commit }, index) {
    try {
      commit('CHANGE_TODO_STATUS', index)
    } catch (error) {
      // TODO notif error
    }
  },
  async updateTodo({ commit }, data) {
    try {
  console.log('data', data)
      commit('UPDATE_TODO', data)
    } catch (error) {
      // TODO notif error
    }
  },
  async removeTodo({ commit }, todo) {
    try {
      commit('REMOVE_TODO', todo)
    } catch (error) {
      // TODO notif error
    }
  }
}

export const getters = {
  todos(state) {
    return state.todos
  },
  todo(state) {
    return state.todo
  }
}
