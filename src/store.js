import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  searchText: "",
  film_url:
    "https://api.themoviedb.org/3/search/movie?api_key=0cc3e4c26383ecd435926783b5016c67&query=",
  serie_url:
    "https://api.themoviedb.org/3/search/tv?api_key=0cc3e4c26383ecd435926783b5016c67&language=it_IT&query=",

  img_url: "https://image.tmdb.org/t/p/w342/",
  img_size: "/w500/",

  filmData: [],
  serieData: [],
  imageData: [],
  /*  result: [], */
  /*   serch() {
    axios.get(this.film_url + `${this.searchText}`).then((response) => {
      console.log(response);
      this.filmData = response.data.results;
      console.log("this.filmData", this.filmData);
    });

    axios.get(this.serie_url + `${this.searchText}`).then((response) => {
      console.log(response);
      this.serieData = response.data.results;
      console.log("this.serieData", this.serieData);
    });
    axios.all(this.filmData, this.serieData).then((response) => {
      this.result = [...this.filmData, ...this.serieData];

      console.log("result", this.result);
    });
  }, */
});
