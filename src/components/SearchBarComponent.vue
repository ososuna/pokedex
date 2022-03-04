<template>
  <div class="input-group" style="width:60%">
    <span class="input-group-text" id="addon-wrapping"><i class="fas fa-search"></i></span>
    <input @keyup="$emit('searchPokemon', $event)" type="text" class="form-control" placeholder="search pokemon" aria-label="search pokemon" aria-describedby="addon-wrapping">
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBarComponent'
});
</script>
