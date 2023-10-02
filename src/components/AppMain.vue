<script>
import { store } from "../store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import x from "../assets/notfound.jpg";
import FilmSerieItem from "./FilmSerieItem.vue";

export default {
  name: "AppMain",
  components: { FilmSerieItem },
  data() {
    return {
      store,
      /* stars: [1, 2, 3, 4, 5], */
      /* idHoveredDiv: null, */
    };
  },
  components: {
    FontAwesomeIcon,
    x,
    FilmSerieItem,
  },
  methods: {
    /*   getFlag(language) {
      if (language === "en") {
        return "/node_modules/flag-icons/flags/1x1/gb.svg";
      }

      return "/node_modules/flag-icons/flags/1x1/" + `${language}` + ".svg";
    }, */

    FilmSerie() {
      return [...this.store.filmData, ...this.store.serieData];
    },
    /* getImage(imagePoster) {
      if (imagePoster === null) {
        return x;
      } else {
        return `${this.store.img_url}${imagePoster}`;
      }
    },
    getClass(index) {
      if (index === this.idHoveredDiv) {
        return { div1: "hovered", div2: "hovered_text" };
      } else {
        return { div1: "hovered_text", div2: "hovered" };
      }
    },
    convertVote(number) {
      return Math.round(number / 2);
    }, */
  },
};
</script>

<template>
  <main class="pt-3">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4">
        <FilmSerieItem
          :items="items"
          v-for="(items, index) in FilmSerie()"
          :key="index"
        ></FilmSerieItem>
        <!-- <div class="p-3 col" v-for="(items, index) in FilmSerie()">
          <div
            @mouseover="
              {
                idHoveredDiv = index;
              }
            "
            @mouseout="
              {
                idHoveredDiv = null;
              }
            "
            :class="getClass(index).div1"
            :key="index"
          >
            <img class="img_poster" :src="getImage(items.poster_path)" alt="" />
          </div>
          <div :class="getClass(index).div2">
            <ul class="p-2 text-white lh-base">
              <li>Titolo: {{ items.title }}{{ items.name }}</li>
              <li>
                Titolo Originale: {{ items.original_title
                }}{{ items.original_name }}
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
        </div> -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.hovered {
  display: none;
}
.hovered_text {
  display: block;
}
</style>
