<script>
import { useAxios } from '@vueblocks/vue-use-axios'
export default {
    setup() {
        const route = useRoute()
        const id = route.params.id;
        const url = 'https://pokeapi.co/api/v2/pokemon/' + id;
        const { data } = useAxios(url)
        const pokemon = ref(data)
        return { pokemon }
    }
}
</script>

<template>
    <section>
        <div class="container h-[100vh] w-[100vw] pt-[2.6rem]" :class="pokemon.types[0].type.name">
            <div class="flex justify-between">
                <NuxtLink to="/" class="flex gap-[0.5rem] items-center">
                    <img src="~/assets/images/icons/chevron-left.svg" class="" alt="chevron links">
                    <p class="text-white text-[1.7rem] font-[400] tracking-[-0.408px] leading-[4.1rem]">Terug</p>
                </NuxtLink>
                <img src="~/assets/images/icons/heart.svg" class="mr-[0.3rem]" alt="favorites">
            </div>

            <h1 class="capitalize text-white ml-[0.3rem] mt-[1rem]">{{ pokemon.name }} </h1>







            <div class="text-black" v-for="t in pokemon.types">
                {{ t.type.name }}
            </div>

        </div>
    </section>
</template>



<style scoped>
</style>