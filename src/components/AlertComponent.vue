<template>
  <div
    :class="`alert alert-${ type }`"
    role="alert"
    style="width:60%"
  >
    {{ msg }}
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlertComponent',
  props: {
    msg: String,
    type: String
  }
});
</script>
