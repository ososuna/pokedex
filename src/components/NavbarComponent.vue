<template>
  <nav class="navbar navbar-primary bg-primary text-secondary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">{{ title }}</span>
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
