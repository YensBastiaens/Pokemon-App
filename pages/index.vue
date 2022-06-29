<script>
import { useAxios } from '@vueblocks/vue-use-axios'
export default {
  // setup() {
  //   const url = 'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon'
  //   const { data } = useAxios(url);
  //   const pokemons = ref(data);
  //   return { pokemons }

  // },
  data() {
    return {
      input: '',
      pokemons: [],
      pokemonNames: [],
    }
  },
  created() {
    const url = 'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon'
    const { data } = useAxios(url);
    this.pokemons = data;
    console.log(this.pokemons)
    this.pokemonNames = this.pokemons.value.map(p => p.name);
  },
  methods: {
    searchPokemon() {
      console.log(this.pokemons)
      console.log(pokemonNames.includes('bulbasaur'))
    }
  }


}
</script>

<template>
  <section>
    <div class="container">
      <div class="flex justify-end gap-[1rem] mt-[2.3rem]">
        <img src="~/assets/images/icons/filterIcon.svg" class="cursor-pointer" alt="filter icon">
        <img src="~/assets/images/icons/orderIcon.svg" class="cursor-pointer" alt="order icon">
      </div>
      <h1 class="text-[#1F2029] pt-[2rem] mb-[1.4rem]">Pokédex</h1>
      <div
        class="bg-[#EFF0F1] flex justify-start flex-row gap-[0.6rem] items-center p-[7px_8px] h-[3.6rem] rounded-[1rem] ">
        <img src="~/assets/images/icons/magnifyingglass.svg" class="w-[15.63px] h-[15.78px]" alt="magnifying glass">
        <input v-model="input" @change="searchPokemon()" class="bg-[#EFF0F1] h-[3.6rem] w-[100%]" type="text"
          placeholder='Pokemon zoeken'>
      </div>
      <div class="flex mt-[1.9rem]  justify-between gap-[0.9rem] ">
        <div class="purpleGradient p-[10px_15px] flex flex-col justify-end relative cursor-pointer">
          <img src="~/assets/images/icons/pokeball.svg" class="h-[80px] absolute right-0" alt="pokeball">
          <h2 class="text-[1.8rem] leading-[2.2rem] font-[700] text-white mb-[0.3rem]">Mijn team</h2>
          <p class='amountPokemons'>4 pokemons</p>
        </div>
        <div class="blueGradient p-[10px_15px] flex flex-col justify-end relative cursor-pointer">
          <img src="~/assets/images/icons/pokeball.svg" class="h-[80px] absolute right-0" alt="pokeball">
          <h2 class="text-[1.8rem] leading-[2.2rem] font-[700] text-white mb-[0.3rem]">Favorieten</h2>
          <p class='amountPokemons'>12 pokemons</p>
        </div>
      </div>

      <ul v-for="(pokemon) in pokemons">
        <NuxtLink :to="'/pokemon/' + `${pokemon.id}`"
          class="individualPokemon my-[1rem] flex flex-row gap-[1rem] w-[100%] h-[7rem] items-center justify-between rounded-[1rem] bg-white cursor-pointer">
          <div class="flex gap-[0.5rem] items-center">
            <img :src="pokemon.sprites.front_default" class="max-w-[6rem] max-h-[5rem] pl-[0.3rem]" alt='pokemon'>
            <div class="flex flex-col">
              <li class="text-[1.7rem] leading-[2rem] font-bold capitalize tracking-[0.0374rem]">{{
                  pokemon.name
              }}</li>
              <li class="text-[#919698] font-[400] text-[1.5rem] leading-[1.8rem]">Nr. {{ pokemon.id
              }}
              </li>
            </div>
          </div>
          <div class="flex flex-row gap-[0.6rem] items-center">
            <div v-for="type in pokemon.types" :class="type.type.name"
              class=" text-white capitalize rounded-[10rem] p-[3px_10px] h-[2rem] flex items-center justify-center text-[1.2rem] font-[400] leading-[1.4rem] tracking-[0.0374rem;]">
              {{ type.type.name }}
            </div>
            <img src="~/assets/images/icons/chevron-right.svg" class="pr-[0.5rem]" alt="chevron rechts">
          </div>
        </NuxtLink>
      </ul>

    </div>
  </section>
</template>



<style scoped>
.purpleGradient {
  background: linear-gradient(109.73deg, #46469C 0%, #7E32E0 100%);
  border-radius: 10px;
  width: 167px;
  height: 100px;
}

.blueGradient {
  background: linear-gradient(109.73deg, #65CB9A 0%, #15D0DC 100%);
  border-radius: 10px;
  width: 167px;
  height: 100px;
}

.amountPokemons {
  color: rgba(255, 255, 255, 0.5);
}


::placeholder {
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: rgba(60, 60, 67, 0.6);
}

input[type=text]:focus {
  outline: none !important;
}

.individualPokemon {
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.05);
}
</style>