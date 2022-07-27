import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

import VueAgile from 'vue-agile'

library.add(faGithub);
library.add(faUpRightFromSquare);

createApp(App).use(VueAgile).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
