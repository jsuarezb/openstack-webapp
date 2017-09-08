<template>
  <div>
    <ul class="todo-list column">
      <li class="todo-item row row-space-between" v-for='(todo, index) in todos'>
        <div class="row custom-checkbox">
          <input type='checkbox'/>
          <label>{{ todo.text }}</label>
        </div>
        <button class="delete-button" v-on:click="deleteTask(index)">
          <img src="../assets/images/delete.svg"/>
        </button>
      </li>
    </ul>
    <div class="add-input">
      <input type='text' v-model="newTask" placeholder='Enter a new task'/>
      <button v-on:click='addTask()'>
        <img src="../assets/images/plus.svg"/>
      </button>
    </div>
  </div>
</template>

<script>
  /* ============
   * List Component
   * ============
   *
   * A basic list component.
   *
   * Gives an idea how components work.
   */


  export default {
    /**
     * The name of the component.
     */
    name: 'list',

    data() {
      return {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' },
        ],
        newTask: '',
      };
    },

    /**
     * The computed properties that the component can use.
     */
    methods: {
      deleteTask(index) {
        this.todos.splice(index, 1);
      },
      addTask() {
        this.todos.push({
          text: this.newTask,
        });
        this.newTask = null;
      },
    },
  };
</script>
