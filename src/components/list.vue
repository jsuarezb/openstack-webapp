<template>
  <div>
    <ul class="todo-list column">
      <li class="todo-item row row-space-between" v-for='todo in todos'>
        <div class="row custom-checkbox">
          <input type='checkbox'/>
          <label>{{ todo.text }}</label>
        </div>
        <button class="delete-button" v-on:click="deleteTask">
          <img src="../assets/images/delete.svg"/>
        </button>
      </li>
    </ul>
    <div class="add-input">
      <input type='text' placeholder='Enter a new task'/>
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
      };
    },

    /**
     * The computed properties that the component can use.
     */
    methods: {
      deleteTask: () => {
        this.todos.push({
          text: 'Hi',
        });
      },
      addTask: (input) => {
        this.todos.push({
          text: input,
        });
      },
    },
  };
</script>
