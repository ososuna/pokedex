<template>
  <div
    class="d-flex justify-content-center col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 mb-3 animate__animated animate__fadeIn animate__faster"
    style="cursor:pointer;"
  >
    <div class="card" style="width:8rem;">
      <img
        :src="img"
        class="card-img-top"
        :alt="name"
      >
      <div class="card-body">
        <h6 class="card-title">{{ name }}</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import 'animate.css';

export default defineComponent({
  name: 'PokemonCard',
  props: {
    name: String,
    img: String
  }
});
</script>
