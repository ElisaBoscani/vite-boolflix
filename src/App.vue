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
    /*    store.fetchFilm();
    store.fetchSerie(); */
  },
  methods: {
    getFlag(language) {
      if (language === "en") {
        return " /node_modules/flag-icons/flags/1x1/gb.svg";
      }
      return " /node_modules/flag-icons/flags/1x1/" + `${language}` + ".svg";
    },
  },
  mounted() {
    store.serch();
  },
};
</script>

<template>
  <div>
    <input type="text" v-model="store.searchText" />
    <button @click="store.serch">Cerca</button>
  </div>
  <div class="p-3" v-for="items in store.result">
    <ul>
      <li>Titolo: {{ items.title }}{{ items.name }}</li>
      <li>
        Titolo Originale: {{ items.original_title }}{{ items.original_name }}
      </li>
      <li>
        Lingua: <img class="fi" :src="getFlag(items.original_language)" />
      </li>

      <!-- {{
        items.original_language
      }} -->

      <li>Voto: {{ items.vote_average }}</li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>
