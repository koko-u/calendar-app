import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bulma/css/bulma.css";
import "@/assets/scss/styles.scss";

library.add(fas);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
