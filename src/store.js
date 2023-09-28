import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  searchText: "",
  base_url:
    "https://api.themoviedb.org/3/search/movie?api_key=0cc3e4c26383ecd435926783b5016c67&query=",
  filmData: [],

  fetchFilm() {
    axios.get(this.base_url + `${this.searchText}`).then((response) => {
      console.log(response);
      this.filmData = response.data.results;
      console.log(this.filmData);
    });
  },
});
