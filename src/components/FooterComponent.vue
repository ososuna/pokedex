<template>
  <footer class="bg-primary text-center text-white mt-5">
    <div class="container p-4">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/ososuna/pokedex.git" target="_blank" role="button">
          <i class="fab fa-github"></i>
        </a>
      </section>
      <section class="mb-4">
        <p><strong>Vue Pokedex</strong></p>
        <p>Vue pokedex just for fun</p>
        <a class="text-white" style="text-decoration:none" href="https://github.com/ososuna" target="_blank">
          <i class="fas fa-code"></i> ososuna
        </a>
      </section>
    </div>
  </footer>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterComponent'
});
</script>
