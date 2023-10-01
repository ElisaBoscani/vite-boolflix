<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { store } from "../store";
export default {
  name: "AppHeader",

  data() {
    return {
      store,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    serchStore() {
      store.serch();
    },
  },
};
</script>

<template>
  <header class="p-3 bg-black">
    <nav class="navbar navbar-expand-lg bg-black">
      <div class="container-fluid">
        <div class="w-25">
          <img src="../assets/Logonetflix.png" alt="LogoNetflix" class="w-50" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse flex-grow-0"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav pe-5">
            <a class="nav-link text-white" aria-current="page" href="#">Film</a>
            <a class="nav-link text-white" href="#">SerieTv</a>
            <a class="nav-link text-white" href="#">Documentari</a>
          </div>
        </div>
        <div class="col d-flex">
          <input
            class="border rounded w-100 pe-2"
            type="text"
            v-model="store.searchText"
          />
          <div class="ps-2">
            <button class="btn btn-dark" @click="serchStore">Cerca</button>
          </div>
        </div>
        <div class="col d-flex justify-content-end gap-3 align-items-center">
          <font-awesome-icon
            icon="fa-solid fa-bell"
            size="2xl"
            style="color: #ffffff"
          />
          <img
            src="../assets/icon.png"
            class="icon_profile border border-danger rounded"
            alt=""
          />
          <div>
            <select class="p-1 bg-white border rounded">
              <option value="">Elisa</option>
              <option>Angela</option>
              <option>Bambini</option>
            </select>
          </div>
        </div>
      </div>
    </nav>

    <!--
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex gap-2 col">
        <div class="w-50">
          <img src="../assets/Logonetflix.png" alt="LogoNetflix" class="w-50" />
        </div>
        <div>
           <select
            class="p-1 bg-danger border border-danger rounded text-white form-select"
          >
            <option value="">Sfoglia</option>
            <option>Azione</option>
            <option>Commedia</option>
          </select>
        </div>
      </div>
      <div class="col d-flex">
        <input
          class="border rounded w-75 pe-2"
          type="text"
          v-model="store.searchText"
        />
        <div class="ps-2">
          <button class="btn btn-dark" @click="serchStore">Cerca</button>
        </div>
      </div>
      <div class="col d-flex justify-content-end gap-3 align-items-center">
        <font-awesome-icon
          icon="fa-solid fa-bell"
          size="2xl"
          style="color: #ffffff"
        />
        <img
          src="../assets/icon.png"
          class="icon_profile border border-danger rounded"
          alt=""
        />
        <div>
          <select class="p-1 bg-white border rounded">
            <option value="">Elisa</option>
            <option>Angela</option>
            <option>Bambini</option>
          </select>
        </div>
      </div>
    </div> -->
  </header>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
}

svg {
  fill: black;
}
header {
  a {
    color: white;
    font-size: 20px;
    font-weight: bolder;
    text-transform: uppercase;
  }
  .icon_profile {
    width: 50px;
    height: 50px;
  }
}
</style>
