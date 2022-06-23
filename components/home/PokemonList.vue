<script>
// import { onMounted } from 'vue';
// import axios from 'axios'
import { useAxios } from '@vueblocks/vue-use-axios'

export default {
    name: 'Home',
    setup() {

        const url = 'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon'
        const { data } = useAxios(url)
        const pokemons = ref(data)
        console.log(pokemons)
        return { pokemons }
    }
}



</script>

<template>
    <section>
        <div class="container">
            <ul v-for="(pokemon) in pokemons">
                <div class="individualPokemon my-[1rem] flex gap-[1rem] ">
                    <img src="" alt='pokemon'>
                    <!-- <div>{{pokemon.sprites.front_default}}</div> -->
                    <div class="flex flex-col">
                        <li class="text-[1.7rem] leading-[2rem] font-bold capitalize tracking-[0.0374rem]">{{
                                pokemon.name
                        }}</li>
                        <li class="text-[#919698] font-[400] text-[1.5rem] leading-[1.8rem]">Nr. {{ pokemon.id }}</li>
                    </div>

                    <div v-for="type in pokemon.types"
                        class="bg-red-500 rounded-[10rem] p-[3px_10px] h-[2rem] flex items-center justify-center text-[1.2rem] font-[400] leading-[1.4rem] tracking-[0.0374rem;]">
                        {{ type.type.name }}
                    </div>
                </div>

            </ul>
        </div>
    </section>
</template>



<style scoped>
.individualPokemon {
    background: #FFFFFF;
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
}
</style>