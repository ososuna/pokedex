<template>
  <nav class="navbar navbar-primary bg-primary text-secondary">
    <div class="container-fluid">
      <h3>
        <span class="navbar-brand">{{ title }}</span>
      </h3>
    </div>
  </nav>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavbarComponent',
  props: {
    title: String
  }
});
</script>
