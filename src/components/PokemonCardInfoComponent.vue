<template>
  <h5 class="card-title mt-4">{{ pokemon.name }}
    <span class="badge bg-primary">{{ pokemon.id }}</span>
  </h5>
  <div class="col-8 mt-4">
    <img
      class="img-fluid rounded-start mt-4"
      style="width:40%"
      :alt="pokemon.name"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ pokemon.id }.png`"
    >
    <div class="d-flex justify-content-center mt-4">
      <div class="progress w-50">
        <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">hp - 106</div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="progress w-50">
        <div class="progress-bar w-75" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">attack - 110</div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="progress w-50">
        <div class="progress-bar w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">defense - 90</div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="progress w-50">
        <div class="progress-bar w-25" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">special attack - 154</div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="progress w-50">
        <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">speed - 130</div>
      </div>
    </div>
  </div>
  <div class="col-4 d-flex align-items-center">
    <div class="card-body text-start">
      <p class="card-text">types  <span class="badge rounded-pill bg-primary">psychic</span></p>
      <p class="card-text">height <strong>{{ pokemon.height }}</strong></p>
      <p class="card-text">weight <strong>{{ pokemon.weight }}</strong></p>
      <p class="card-text">base experience <strong>{{ pokemon.base_experience }}</strong></p>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';

import { PokemonInfo } from '@/models/PokemonInfo';

export default defineComponent({
  name: 'PokemonCardInfoComponent',
  props: {
    pokemon: Object as PropType<PokemonInfo>
  },
  setup(props) {
    console.log(props.pokemon?.name); 
  }
});
</script>
