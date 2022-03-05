<template>
  <h5 class="card-title mt-4">mewtwo <span class="badge bg-primary">150</span></h5>
  <div class="col-8 mt-4">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
      class="img-fluid rounded-start mt-4"
      style="width:40%"
      alt="mewtwo"
    >
    <div class="d-flex justify-content-center mt-4">
      <div class="progress" style="width:30%">
        <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">hp - 106</div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="progress" style="width:30%">
        <div class="progress-bar w-75" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">attack - 110</div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="progress" style="width:30%">
        <div class="progress-bar w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">defense - 90</div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="progress" style="width:30%">
        <div class="progress-bar w-25" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">special attack - 154</div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="progress" style="width:30%">
        <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">speed - 130</div>
      </div>
    </div>
  </div>
  <div class="col-4 d-flex align-items-center">
    <div class="card-body text-start">
      <p class="card-text">types  <span class="badge rounded-pill bg-primary">psychic</span></p>
      <p class="card-text">height <strong>20</strong></p>
      <p class="card-text">weight <strong>1220</strong></p>
      <p class="card-text">base experience <strong>340</strong></p>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PokemonCardInfoComponent'
});
</script>
