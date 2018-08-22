<template>
  <f7-page>
    <f7-navbar>
 
      <f7-nav-title>TODO APP</f7-nav-title>
     
    </f7-navbar>
    
  <f7-block-title>UNDONE</f7-block-title>
  <f7-list  media-list v-if="not_done_todos">
      <f7-list-item
       v-bind:title="todo.title" 
       v-bind:text="todo.description" 
       swipeout
       v-for="(todo, index) in not_done_todos" :key='index'>
        <f7-swipeout-actions left>
          <f7-swipeout-button @click="done_todo(todo)" color="green">Done</f7-swipeout-button>
        </f7-swipeout-actions>
        
        <f7-swipeout-actions right>
          <f7-swipeout-button delete @click="remove_todo(todo)">Delete</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
  </f7-list>

  <f7-block-title>DONE</f7-block-title>
  <f7-list media-list  v-if="done_todos">
<f7-list-item
       v-bind:title="todo.title" 
       v-bind:text="todo.description" 
       swipeout
       v-for="(todo, index) in done_todos" :key='index'>
        <f7-swipeout-actions left>
          <f7-swipeout-button @click="done_todo(todo)" color="green">Done</f7-swipeout-button>
        </f7-swipeout-actions>
        
        <f7-swipeout-actions right>
          <f7-swipeout-button delete @click="remove_todo(todo)">Delete</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>  </f7-list>
  <new-todo></new-todo>
  </f7-page>
</template>
<script>
import { f7Page, f7Navbar, f7NavTitle, f7BlockTitle, f7List, f7ListItem, f7Link,f7SwipeoutActions,f7SwipeoutButton } from 'framework7-vue';
import NewTodo from './new-todo.vue'
export default {
  methods: {
    done_todo: function(todo) {
      console.log("done", todo)
      this.$store.dispatch("COMPLETE_TODO", todo);
    },
    remove_todo:function(todo) {
        this.$store.dispatch("REMOVE_TODO", todo)
      },
  },
  computed: {
    not_done_todos: function() {
      return this.$store.getters.not_done;
    },
    done_todos: function(){
                return this.$store.getters.done;
            }
  },
  components: {
    f7Page,
    f7Navbar,
    f7NavTitle,
    f7BlockTitle,
    f7List,
    f7ListItem,
    f7Link,
    f7SwipeoutActions,
    f7SwipeoutButton,
    NewTodo
  }
};
</script>
