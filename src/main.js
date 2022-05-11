import "mdb-vue-ui-kit/css/mdb.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbvue/build/css/mdb.css";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

createApp(App).use(router).mount("#app");
