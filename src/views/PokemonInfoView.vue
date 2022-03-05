<template>
  <NavbarComponent />
  <div class="container card d-flex flex-column mt-5 mb-5" style="width:80%"> 
    <div class="row d-flex justify-content-center g-0 mb-5">
      <PokemonCardInfoComponent />
    </div>
  </div>
  <FooterComponent />
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import NavbarComponent from '@/components/NavbarComponent.vue';
import PokemonCardInfoComponent from '@/components/PokemonCardInfoComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
  name: 'PokemonInfoView',
  components: {
    NavbarComponent,
    PokemonCardInfoComponent,
    FooterComponent
  }
});
</script>
