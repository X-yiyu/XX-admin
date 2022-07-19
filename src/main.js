import { createApp } from "vue";

import Cookies from "js-cookie";

import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn"; // 中文语言

import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus, {
  locale: locale,
  // 支持 large、default、small
  size: Cookies.get("size") || "default"
});

app.mount("#app");
