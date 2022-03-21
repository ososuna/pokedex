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
    <div v-for="stat in stats" :key="stat.name">
      <div class="d-flex justify-content-center mt-2">
        <div class="progress w-50">
          <div class="progress-bar" :style="`width:${ stat.baseStat*100/185 }%`" role="progressbar" :aria-valuenow="stat.baseStat" aria-valuemin="0" aria-valuemax="100">
            {{ stat.baseStat }}
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <small style="font-size:.8rem">{{ stat.name }}</small>
      </div>
    </div>
  </div>
  <div class="col-4 d-flex align-items-center">
    <div class="card-body text-start">
      <p class="card-text">
        types
        <span v-for="type in types" :key="type" class="badge rounded-pill bg-primary" style="margin-right:5px">{{ type }}</span>
      </p>
      <p class="card-text">height <strong>{{ pokemon.height }}</strong></p>
      <p class="card-text">weight <strong>{{ pokemon.weight }}</strong></p>
      <p class="card-text">base experience <strong>{{ pokemon.base_experience }}</strong></p>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType, ref } from 'vue';

import { PokemonInfo } from '@/models/PokemonInfo';

export default defineComponent({
  name: 'PokemonInfo',
  props: {
    pokemon: Object as PropType<PokemonInfo>
  },
  setup(props) {
    
    const types = ref([] as string[]);
    const stats = ref([] as { name: string, baseStat: number }[]);

    const getTypes = () => {
      types.value = props.pokemon?.types.map( type => type.type.name ) || [];
    }

    const getStats = () => {
      
      stats.value = props.pokemon?.stats.map( stats => {
        return {
          name: stats.stat.name.replace('-', ' '),
          baseStat: stats.base_stat
        }
      }) || [];
      
    }
    
    getTypes();

    getStats();

    return {
      types,
      stats
    }

  }
});
</script>
