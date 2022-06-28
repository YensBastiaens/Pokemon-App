<template>
    <div class="flex justify-center flex-col items-center mt-[10rem]">
        <h1 v-if="error.statusCode === 404">Deze URL bestaat niet.</h1>
        <h1 v-else>Er is een fout opgetreden</h1>
        <NuxtLink to="/" class="button m-[3rem] text-white font-bold p-[10px_15px] rounded-[1rem]">Ga terug naar de
            pokemons
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error'
}
</script>

<style scoped>
.button {
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.05);
    background: linear-gradient(109.73deg, #65CB9A 0%, #15D0DC 100%);
}
</style>