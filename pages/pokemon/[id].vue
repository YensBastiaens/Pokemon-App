<script>
import { useAxios } from '@vueblocks/vue-use-axios'

export default {
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const { data } = useAxios(url);
        const pokemon = ref(data);

        // const urlEvolution = `https://pokeapi.co/api/v2/evolution-chain/${id}`;
        // const { data2 } = useAxios(urlEvolution);
        // const evolution = ref(data2);
        // console.log(evolution)
        return { pokemon }
    }
}

</script>

<template>

    <div v-if="pokemon" class="delayLoading" :class="pokemon.types[0].type.name">
        <div class="container pt-[2.6rem] pb-[10.6rem]">

            <div class="flex justify-between">
                <NuxtLink to="/" class="flex gap-[0.5rem] items-center">
                    <img src="~/assets/images/icons/chevron-left.svg" class="" alt="chevron links">
                    <p class="text-white text-[1.7rem] font-[400] tracking-[-0.408px] leading-[4.1rem]">Terug</p>
                </NuxtLink>
                <img src="~/assets/images/icons/heart.svg" class="mr-[0.3rem]" alt="favorites">
            </div>

            <h1 class=" capitalize text-white ml-[0.3rem] mt-[1rem] tracking-[0.374px]">{{ pokemon.name }} </h1>
            <div class="flex justify-center">
                <img :src="pokemon.sprites.front_default" alt="pokemon" class="h-[25rem] w-[25rem] text-center ">
            </div>

            <section>
                <h2 class="subtitles ">about</h2>
                <div class="bg-white flex flex-row gap-[3rem] p-[20px_15px] rounded-[1rem]">
                    <div class="flex flex-col gap-[1.47rem]">
                        <h3 class="features">type</h3>
                        <h3 class="features">nummer</h3>
                        <h3 class="features">hoogte</h3>
                        <h3 class="features">gewicht</h3>
                        <h3 class="features">vaardigheden</h3>
                    </div>

                    <div class="flex flex-col gap-[1.4rem]">
                        <div class="flex gap-[0.6rem]">
                            <div v-for="t in pokemon.types" :class="t.type.name"
                                class=" text-white capitalize rounded-[10rem] p-[3px_10px] h-[2rem] flex items-center justify-center text-[1.2rem] font-[400] leading-[1.4rem] tracking-[0.0374rem;]">
                                {{ t.type.name }}
                            </div>
                        </div>
                        <p class="featureText">{{ pokemon.order }}</p>
                        <p class="featureText">{{ pokemon.height / 10 }}m</p>
                        <p class="featureText">{{ pokemon.weight / 10 }}kg</p>
                        <div class="flex flex-row gap-[1rem]">
                            <p v-for="ability in pokemon.abilities" class="featureText">{{ ability.ability.name }} </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="subtitles mt-[2.8rem]">statistieken</h2>
                <div class="bg-white flex flex-row gap-[3rem] p-[20px_15px] rounded-[1rem] items-center">
                    <div class="flex flex-col gap-[1.4rem]">
                        <h3 class="features">HP</h3>
                        <h3 class="features">Attack</h3>
                        <h3 class="features">Defense</h3>
                        <h3 class="features">Sp. Atk</h3>
                        <h3 class="features">Sp. Def</h3>
                        <h3 class="features">Speed</h3>
                    </div>

                    <div class="flex flex-col gap-[1.4rem]">
                        <div v-for="stat in pokemon.stats" class="flex items-center justify-center gap-[1.5rem]">
                            <div>{{ stat.base_stat }}</div>
                            <progress :class="{ 'red': stat.base_stat < 50 }" :value="stat.base_stat"
                                max="90"></progress>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <h2 class="subtitles mt-[2.8rem]">moveset</h2>
                <div class="bg-white p-[20px_15px] grid grid-cols-2 rounded-[1rem] gap-[1rem] items-center">
                    <div v-for="move in pokemon.moves.slice(5, 9)" class="flex flex-row gap-[1.3rem] items-center">
                        <div v-for="level in move.version_group_details.slice(0, 1)"
                            class="level bg-green-300 border border-[green]  p-[5px_15px] rounded-[3rem]">
                            Level {{ level.level_learned_at }}
                        </div>
                        <div class="capitalize text-[#1F2029] font-[600]">
                            {{ move.move.name }}
                        </div>
                    </div>
                </div>
            </section>

            <!-- <section>
                <h2 class="subtitles mt-[2.8rem]">evolutie</h2>
            </section> -->

            <div class="flex justify-center sticky">
                <BtnAddButton :text="'Toevoegen aan mijn team'" />
            </div>

        </div>
    </div>
</template>



<style scoped>
progress {
    display: flex;
    align-items: center;
}

progress::-webkit-progress-bar {
    height: 4px;
    margin-top: 5px;
    width: 200px;
    background: rgb(172, 178, 193, 0.2);
    border-radius: 100px;

}

progress::-webkit-progress-value {
    background: #70C18F;
    border-radius: 100px;
}

.red::-webkit-progress-value {
    background-color: red;

}



.subtitles {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 0.374px;
    padding-bottom: 0.7rem;

    color: white;
}

.features {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.408px;
    text-transform: capitalize;
    color: #ACB2C1;
}

.featureText {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.408px;
    text-transform: capitalize;
}

.level {
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.5px;
    color: white;
}
</style>