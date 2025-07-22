import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import api from "./api/index.js";
import http from "./api/http.js";
import utils from "./utils.js";
import eventBus from "vue3-eventbus";

import "./scss/theme.scss";
import * as bootstrap from "bootstrap";

import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

// 全局重要属性
app.config.globalProperties.$globalData = {
  conferenceId: "1899130655669882882",
};

// 绑定 $req $api
app.config.globalProperties.$api = api;
app.config.globalProperties.$http = http;

// eventbus
app.config.globalProperties.$bus = eventBus;

// 通用方法
app.config.globalProperties.checkPhone = utils.checkPhone;
app.config.globalProperties.checkEmail = utils.checkEmail;
app.config.globalProperties.checkTaxNumber = utils.checkTaxNumber;
app.config.globalProperties.checkPassword = utils.checkPassword;
app.config.globalProperties.checkEmpty = utils.checkEmpty;
app.config.globalProperties.formatFileSize = utils.formatFileSize;

app.config.globalProperties.setStorage = utils.setStorage;
app.config.globalProperties.getStorage = utils.getStorage;
app.config.globalProperties.removeStorage = utils.removeStorage;

app.config.globalProperties.data2json = utils.data2json;
app.config.globalProperties.json2data = utils.json2data;

app.config.globalProperties.tokenNotice = utils.tokenNotice;
app.config.globalProperties.tokenWatch = utils.tokenWatch;

app.config.globalProperties.base64Encode = utils.base64Encode;
app.config.globalProperties.base64Decode = utils.base64Decode;
app.config.globalProperties.html2text = utils.html2text;

window._global_router_ = router;

// import { tooltip } from "./tooltip.js";
// app.directive("tooltip", tooltip);

import { TooltipDirective, TooltipComponent } from "vue3-tooltip";
import "vue3-tooltip/tooltip.css";
app.directive("tooltip", TooltipDirective);
app.component("tooltip", TooltipComponent);

app.use(router).mount("#app");
