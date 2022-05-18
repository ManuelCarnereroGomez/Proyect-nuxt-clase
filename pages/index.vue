<template>
  <main>
    <baner-image :source="'/imagen1.jpg'" :alt="'imagen de unas ramas'" />
    <h1>Esto es el index</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti adipisci
      illum natus ad consequatur architecto labore perferendis quia sit dolorum
      error aliquid impedit magni harum est itaque, illo ratione accusamus!
    </p>

    <section class="cards-section">
      <article-card v-for="(card, i) in cards" :key="i" :title="card.title" />
    </section>

  </main>
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return{
      isActive: false,
      cards: [
        {title: 'boton uno'},
        {title: 'boton dos'},
        {title: 'boton tres'},
        {title: 'boton cuatro'}
      ],
      textoinventado: "esto es un texto inventado"
    }

  },
}

</script>

<script>
import ArticleCard from "../components/ArticleCard.vue";
export default {
  components: { ArticleCard },
  name: "IndexPage",
};
</script>

<style lang="postcss">
hi {
  @apply text-5xl;
}
</style>