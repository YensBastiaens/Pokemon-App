<script>
import { useAxios } from '@vueblocks/vue-use-axios'
export default {
    setup() {
        const url = 'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon'
        const { data } = useAxios(url)
        const pokemons = ref(data)
        return { pokemons }
    }
}
</script>
<template>
    <div class="background">
        <div class="container pt-[2.6rem]">
            <div class="flex justify-between">
                <NuxtLink to="/" class="flex gap-[0.5rem] items-center">
                    <img src="~/assets/images/icons/chevron-left.svg" class="" alt="chevron links">
                    <p class="text-white text-[1.7rem] font-[400] tracking-[-0.408px] leading-[4.1rem]">Terug</p>
                </NuxtLink>
                <img src="~/assets/images/icons/heart.svg" class="mr-[0.3rem]" alt="favorites">
            </div>
            <h1 class=" capitalize text-white ml-[0.3rem] mt-[1rem] tracking-[0.374px] mb-[2rem]">Mijn team </h1>

            <ul v-for="(pokemon) in pokemons.slice(0, 3)">
                <NuxtLink :to="'/pokemon/' + `${pokemon.id}`"
                    class="individualPokemon my-[1rem] flex flex-row gap-[1rem] w-[100%] h-[7rem] items-center justify-between rounded-[1rem] bg-white cursor-pointer">
                    <div class="flex gap-[0.5rem] items-center">
                        <img :src="pokemon.sprites.front_default" class="max-w-[6rem] max-h-[5rem] pl-[0.3rem]"
                            alt='pokemon'>
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
    </div>
</template>



<style scoped>
.background {
    background: linear-gradient(109.73deg, #46469C 0%, #7E32E0 100%);
    height: 100vh;
}
</style>