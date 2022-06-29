import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import urql from "@urql/vue";
import './index.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(urql, {
  url: "http://localhost:3000/graphql",
});

app.mount("#app");
