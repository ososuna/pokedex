<template>
  <div class="d-flex justify-content-center mt-2 mb-2">
    <div class="spinner-border">
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpinnerComponent',
  props: {
    title: String
  }
});
</script>
