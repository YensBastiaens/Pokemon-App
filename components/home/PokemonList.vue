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

        </div>
    </section>
</template>



<style scoped>
</style>