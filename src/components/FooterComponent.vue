<template>
  <footer class="bg-primary text-center text-white mt-5">
    <div class="container p-4">
      <section class="mb-4">
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/ososuna/pokedex.git" target="_blank" role="button">
          <i class="fab fa-github"></i>
        </a>
      </section>
      <section class="mb-4">
        <div class="mb-3">
          <a href="#">
            <img src="https://fontmeme.com/permalink/220303/53e6f4184809d9dbe6e98062a0948a4e.png" alt="vue-pokedex" width="120">
          </a>
        </div>
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
