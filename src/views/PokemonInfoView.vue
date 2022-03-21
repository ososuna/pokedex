<template>
  <NavbarComponent />
  <div class="container card d-flex flex-column mt-5 mb-5" style="width:80%"> 
    <div class="row d-flex justify-content-center g-0 mb-5">
      <PokemonCardInfoComponent v-if="Object.keys(pokemon).length !== 0" :pokemon="pokemon" />
      <SpinnerComponent v-else />
    </div>
  </div>
  <FooterComponent />
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

import { useRoute } from 'vue-router';

import pokeApi from '@/api/pokeApi';

import NavbarComponent from '@/components/NavbarComponent.vue';
import PokemonCardInfoComponent from '@/components/PokemonCardInfoComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';

export default defineComponent({
  name: 'PokemonInfoView',
  components: {
    NavbarComponent,
    PokemonCardInfoComponent,
    FooterComponent,
    SpinnerComponent
  },
  setup() {
    
    const router = useRoute();

    const pokemon = ref({});

    const loadPokemon = async() => {
      const { data } = await pokeApi.get( router.params['id'] as string );
      pokemon.value = data;
    }

    loadPokemon();

    return {
      pokemon
    }

  }
});
</script>
