<script>
import { store } from "../store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import x from "../assets/notfound.jpg";
export default {
  name: "FilmSerieItem",
  props: {
    items: Object,
  },
  data() {
    return {
      store,
      FontAwesomeIcon,
      x,
      idHoveredDiv: true,
      stars: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    getFlag(language) {
      if (language === "en") {
        return "/node_modules/flag-icons/flags/1x1/gb.svg";
      }

      return "/node_modules/flag-icons/flags/1x1/" + `${language}` + ".svg";
    },

    getImage(imagePoster) {
      if (imagePoster === null) {
        return x;
      } else {
        return `${this.store.img_url}${imagePoster}`;
      }
    },
    hideImage() {
      this.idHoveredDiv = false;
    },
    showImage() {
      this.idHoveredDiv = true;
    },
    convertVote(number) {
      return Math.round(number / 2);
    },
  },
};
</script>
<template>
  <div v-show="idHoveredDiv" @mouseover="hideImage" @mouseleave="showImage">
    <img class="img_poster" :src="getImage(items.poster_path)" alt="" />
  </div>
  <div v-show="!idHoveredDiv">
    <ul class="p-2 text-white lh-base">
      <li>Titolo: {{ items.title }}{{ items.name }}</li>
      <li>
        Titolo Originale: {{ items.original_title }}{{ items.original_name }}
      </li>
      <li class="pt-2">
        <img class="fi" :src="getFlag(items.original_language)" />
      </li>
      <li>{{ items.overview }}</li>
      <div class="d-flex pt-2">
        <li v-for="(star, index) in stars" :key="index">
          <div v-if="index < convertVote(items.vote_average)">
            <font-awesome-icon
              icon="fa-solid fa-star"
              style="color: rgba(249, 232, 51, 1)"
            />
          </div>
          <div v-else>
            <font-awesome-icon
              icon="fa-regular fa-star"
              style="color: rgba(249, 232, 51, 1)"
            />
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>
<style></style>
