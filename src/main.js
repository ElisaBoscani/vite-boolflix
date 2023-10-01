import { createApp } from "vue";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import "../src/scss/app.scss";
import App from "./App.vue";

/* Set up using Vue 3 */

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faBell, faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
/* add icons to the library */
library.add(faBell, fasStar, farStar);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
