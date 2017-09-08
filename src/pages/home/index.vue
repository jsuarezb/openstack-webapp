<template>
  <v-layout>
    <div class="column">
      <h1 class="title">What needs to be done?</h1>
      <h2 class="subtitle">{{dateTime}}</h2>
      <v-list></v-list>
    </div>
  </v-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  import VLayout from '@/layouts/default';
  import VList from '@/components/list';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        dateTime: new Date().toLocaleString(),
      };
    },

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VList,
    },
  };
</script>
