<script>
import { store } from "./store";
import axios from "axios";
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
    serch() {
      axios
        .get(this.store.film_url + `${this.store.searchText}`)
        .then((response) => {
          console.log(response);
          this.store.filmData = response.data.results;
          console.log("this.filmData", this.store.filmData);
        });

      axios
        .get(this.store.serie_url + `${this.store.searchText}`)
        .then((response) => {
          console.log(response);
          this.store.serieData = response.data.results;
          console.log("this.serieData", this.store.serieData);
        });
      /*    axios
        .all([axios.get(this.store.filmData), axios.get(this.store.serieData)])
        .then((response) => {
          this.store.result = [...this.store.filmData, ...this.store.serieData];

          console.log("result", this.store.result);
        }); */
      axios.all(this.store.filmData, this.store.serieData).then((response) => {
        this.store.result = [...this.store.filmData, ...this.store.serieData];

        console.log("result", this.store.result);
      });
    },
  },
};
</script>

<template>
  <div>
    <input type="text" v-model="store.searchText" />
    <button @click="serch">Cerca</button>
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
