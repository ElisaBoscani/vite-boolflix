<script>
import { store } from "./store";
export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  created() {
    store.fetchFilm();
  },
};
</script>

<template>
  <div>
    <input type="text" v-model="store.searchText" />
    <button @click="store.fetchFilm">Cerca</button>
  </div>
  <div class="p-3" v-for="items in store.filmData">
    <ul>
      <li>Titolo: {{ items.title }}</li>
      <li>Titolo Originale: {{ items.original_title }}</li>
      <li>Lingua: {{ items.original_language }}</li>
      <li>Voto: {{ items.vote_average }}</li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>
