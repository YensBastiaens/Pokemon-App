<script>

</script>

<template>
    <section>
        <div class="container">
            <h1 class="text-[#1F2029] pt-[9rem] mb-[1.4rem]">Pokédex</h1>
            <div
                class="bg-[#EFF0F1] flex justify-start flex-row gap-[0.6rem] items-center p-[7px_8px] h-[3.6rem] rounded-[1rem]">
                <img src="~/assets/images/icons/magnifyingglass.svg" class="w-[15.63px] h-[15.78px]"
                    alt="magnifying glass">
                <input class="bg-[#EFF0F1] h-[3.6rem] w-[100%]" type="text" placeholder='Pokemon zoeken'>
            </div>
            <div class="flex mt-[1.9rem]  justify-between">
                <div class="purpleGradient p-[10px_15px] flex flex-col justify-end relative">
                    <img src="~/assets/images/icons/pokeball.svg" class="h-[80px] absolute right-0" alt="pokeball">
                    <h2 class="text-[1.8rem] leading-[2.2rem] font-[700] text-white mb-[0.3rem]">Mijn team</h2>
                    <p class='amountPokemons'>4 pokemons</p>
                </div>
                <div class="blueGradient p-[10px_15px] flex flex-col justify-end relative">
                    <img src="~/assets/images/icons/pokeball.svg" class="h-[80px] absolute right-0" alt="pokeball">
                    <h2 class="text-[1.8rem] leading-[2.2rem] font-[700] text-white mb-[0.3rem]">Favorieten</h2>
                    <p class='amountPokemons'>12 pokemons</p>
                </div>
            </div>

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
</style>