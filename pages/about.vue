<template>
  <main>
    <baner-image :source="'/imagen2.jpg'" :alt="'imagen de una catedral'" />

    <section>
      <h1>About</h1>
      <p>Estamos en la pagina 2</p>
    </section>

    <div id="map-wrap" style="height: 100vh">
      <client-only>
        <l-map :zoom="13" :center="[55.9464418, 8.1277591]">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker :lat-lng="[55.9464418, 8.1277591]"></l-marker>
        </l-map>
      </client-only>
    </div>

    
    <section>
      <section class="cards-section"></section>
      <article-card v-for="(item, index) in 4" :key="index" />
    </section>
  </main>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style>
.cards-section {
  display: flex;
}
</style>


