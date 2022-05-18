<template>
    <img class="BanerImage" :src="source" :alt="alt">
</template>

<script>

 export default {
     props: ["source" , "alt"]
 }

</script>


<style lang="postcss">
.BanerImage{
    @apply w-full;
}
    
</style>