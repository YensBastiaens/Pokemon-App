<script setup>
const props = defineProps({
    text: String,
    url: String,
});
</script>

<template>
    <a class=" bg-[#1F2029] rounded-[10rem] p-[12px_68px] text-white font-[700] text-[1.7rem] bottom-[3rem] fixed cursor-pointer"
        :href="url">
        {{ props.text }}
    </a>
</template>



<style scoped>
</style>