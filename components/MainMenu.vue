<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">
          <MaterialIconHome />
          Home
          </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          <MaterialIconAlarm />
          About
        </NuxtLink>
      </li>
    </ul>
    <div class="user" @click="panelIsOpen = !panelIsOpen"></div>
    <div class="panel" v-show="panelIsOpens"></div>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      panelIsOpen: false,
    };
  },
};
</script>
<style lang="postcss">
nav {
  display: flex;
  justify-content: space-between;
  @apply bg-gray-200;
  ul {
    display: flex;
    li {
      @apply p-5;
    }
  }
  .user {
    @apply m-3 w-12 h-12 bg-gray-400 rounded-full;
  }
  .panel {
    @apply w-48 h-24 bg-white;
    position: absolute;
    top: 100px;
  }
}
.nuxt-link-exact-active {
  font-weight: bold;
}
</style>