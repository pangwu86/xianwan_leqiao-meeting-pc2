import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import api from "./api/index.js";
import http from "./api/http.js";
import eventBus from "vue3-eventbus";

import "./scss/theme.scss";
import * as bootstrap from "bootstrap";

import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

// 绑定 $req $api
app.config.globalProperties.$api = api;
app.config.globalProperties.$http = http;

// eventbus
app.config.globalProperties.$bus = eventBus;

// 通用方法
app.config.globalProperties.checkPhone = function (mobile) {
  var re = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
  var result = re.test(mobile);
  if (!result) {
    alert("Phone is incorrect");
    return false; //若手机号码格式不正确则返回false
  }
  return true;
};

app.config.globalProperties.checkEmail = function (email) {
  var re =
    /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
  var result = re.test(email);
  if (!result) {
    alert("Email is incorrect.");
    return false; //若手机号码格式不正确则返回false
  }
  return true;
};

app.config.globalProperties.checkPassword = function (
  pwd,
  pwdName = "The password"
) {
  var re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$.~!])[a-zA-Z\d@#$.~!]{8,18}$/;
  var result = re.test(pwd);
  if (!result) {
    alert(
      pwdName +
        " does not meet the format requirements. Please enter a character string consisting of 8 to 18 characters, including numbers, letters, and special characters（@#$.~!）."
    );
    return false; //若手机号码格式不正确则返回false
  }
  return true;
};

app.config.globalProperties.checkEmpty = function (nm, val) {
  let result;
  if (val.trim() == "") {
    result = false;
  } else {
    result = true;
  }
  if (!result) {
    alert(nm + " cannot be empty.");
    return false;
  }
  return true;
};

app.config.globalProperties.formatFileSize = function (fileSize) {
  if (fileSize < 1024) {
    return fileSize + "B";
  } else if (fileSize < 1024 * 1024) {
    var temp = fileSize / 1024;
    temp = temp.toFixed(2);
    return temp + "KB";
  } else if (fileSize < 1024 * 1024 * 1024) {
    var temp = fileSize / (1024 * 1024);
    temp = temp.toFixed(2);
    return temp + "MB";
  } else {
    var temp = fileSize / (1024 * 1024 * 1024);
    temp = temp.toFixed(2);
    return temp + "GB";
  }
};

app.config.globalProperties.setStorage = function (nm, obj) {
  let objJson = JSON.stringify(obj);
  if (objJson.indexOf("{") == 0 || objJson.indexOf("[") == 0) {
    window.localStorage.setItem(nm, objJson);
  } else {
    window.localStorage.setItem(nm, obj);
  }
};

app.config.globalProperties.getStorage = function (nm) {
  let objJson = window.localStorage.getItem(nm);
  if (objJson != null) {
    if (objJson.indexOf("{") == 0 || objJson.indexOf("[") == 0) {
      objJson = JSON.parse(objJson);
    }
  }
  return objJson;
};

app.config.globalProperties.removeStorage = function (nm) {
  window.localStorage.removeItem(nm);
};

app.config.globalProperties.data2json = function (data) {
  return JSON.stringify(data).replaceAll('"', "'");
};

app.config.globalProperties.json2data = function (str) {
  return JSON.parse(str.replaceAll("'", '"'));
};

let tokenWatcher = [];
app.config.globalProperties.tokenNotice = function () {
  tokenWatcher.forEach((tk) => {
    tk();
  });
};
app.config.globalProperties.tokenWatch = function (func) {
  tokenWatcher.push(func);
};

window._global_router_ = router;

// import { tooltip } from "./tooltip.js";
// app.directive("tooltip", tooltip);

import { TooltipDirective, TooltipComponent } from "vue3-tooltip";
import "vue3-tooltip/tooltip.css";
app.directive("tooltip", TooltipDirective);
app.component("tooltip", TooltipComponent);

app.use(router).mount("#app");
