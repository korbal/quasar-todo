import Vue from "vue"

const state = {
  tasks: {
    'ID1': {
      name: "Go to shop",
      completed: false,
      dueDate: "2019/05/12",
      dueTime: "18:30"

    },
    'ID2': {
      name: "Get bananas",
      completed: false,
      dueDate: "2019/05/13",
      dueTime: "14:00"

    },
    'ID3': {
      name: "Go to shop",
      completed: false,
      dueDate: "2019/05/14",
      dueTime: "16:00"

    },

  }
  // this was ok for prototyping, but firebase uses objects and not arrays
  // tasks: [
  //   {
  //     id: 1,
  //     name: "Go to shop",
  //     completed: false,
  //     dueDate: "2019/05/12",
  //     dueTime: "18:30"
  //   },
  //   {
  //     id: 2,
  //     name: "Get bananas",
  //     completed: true,
  //     dueDate: "2019/05/13",
  //     dueTime: "14:00"
  //   },
  //   {
  //     id: 3,
  //     name: "Go to shop",
  //     completed: false,
  //     dueDate: "2019/05/14",
  //     dueTime: "16:00"
  //   }
  // ]

}

const mutations = {
  updateTask(state, payload) {
    console.log("payload from mutation: ", payload)
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    //console.log('delete id: ', id)
    Vue.delete(state.tasks, id)

  }

}

const actions = {
  updateTask({ commit }, payload) {
    console.log("updateTask action")
    console.log("payload: ", payload)
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)

  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}