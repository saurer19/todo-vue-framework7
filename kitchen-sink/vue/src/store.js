import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const ADD_TODO_MUTATION = "ADD_TODO_MUTATION";
const COMPLETE_TODO_MUTATION = "COMPLETE_TODO_MUTATION";
const REMOVE_TODO_MUTATION = "REMOVE_TODO_MUTATION";
const store = new Vuex.Store({
  state: {
    todos: []
  },
  actions: {
    ADD_TODO: function({ commit }, new_todo) {
      const set_new = {
        title: new_todo.title,
        description: new_todo.description,
        status: false
      };
      commit(ADD_TODO_MUTATION, set_new);
    },
    COMPLETE_TODO: function({ commit }, todo) {
      commit(COMPLETE_TODO_MUTATION, todo);
    },
    REMOVE_TODO: function({ commit }, todo) {
      commit(REMOVE_TODO_MUTATION, todo);
    }
  },
  mutations: {
    ADD_TODO_MUTATION: function(state, new_todo) {
      state.todos.push(new_todo);
    },
    COMPLETE_TODO_MUTATION: function(state, todo) {
      state.todos.map(x => {
        return x.title == todo.title ? (x.status = !x.status) : x;
      });
    },
    REMOVE_TODO_MUTATION: function(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    }
  },
  getters: {
    not_done: state => {
      const filtered = state.todos.filter(function(el) {
        return el.status === false;
      });
      return filtered;
    },
    done: state => {
      const filtered = state.todos.filter(function(el) {
        return el.status === true;
      });
      return filtered;
    }
  }
});

export default store;
