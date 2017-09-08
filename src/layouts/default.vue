<template>
  <div>
    <div class="content-wrapper">
      <!-- Content will be placed here -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
  /* ============
   * Default Layout
   * ============
   *
   * Used for the home and account pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  export default {
    /**
     * The name of the layout.
     */
    name: 'default-layout',
  };
</script>
