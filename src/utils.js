// 通用方法
export function checkPhone(mobile) {
  var re = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
  var result = re.test(mobile);
  if (!result) {
    alert("Phone is incorrect");
    return false; //若手机号码格式不正确则返回false
  }
  return true;
}

export function checkEmail(email) {
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var result = re.test(email);
  if (!result) {
    alert("Email is incorrect.");
    return false; //若手机号码格式不正确则返回false
  }
  return true;
}

export function checkTaxNumber(taxNumber) {
  var re = /^[A-Z0-9]{15}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/;
  var result = re.test(taxNumber);
  if (!result) {
    alert("Tax Number is incorrect.");
    return false; //若手机号码格式不正确则返回false
  }
  return true;
}

export function checkPassword(pwd, pwdName = "The password") {
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
}

export function checkEmpty(nm, val) {
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
}

export function formatFileSize(fileSize) {
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
}

export function setStorage(nm, obj) {
  let objJson = JSON.stringify(obj);
  if (objJson.indexOf("{") == 0 || objJson.indexOf("[") == 0) {
    window.localStorage.setItem(nm, objJson);
  } else {
    window.localStorage.setItem(nm, obj);
  }
}

export function getStorage(nm) {
  let objJson = window.localStorage.getItem(nm);
  if (objJson != null) {
    if (objJson.indexOf("{") == 0 || objJson.indexOf("[") == 0) {
      objJson = JSON.parse(objJson);
    }
  }
  return objJson;
}

export function removeStorage(nm) {
  window.localStorage.removeItem(nm);
}

export function data2json(data) {
  return JSON.stringify(data).replaceAll('"', "'");
}

export function json2data(str) {
  return JSON.parse(str.replaceAll("'", '"'));
}

let tokenWatcher = [];
export function tokenNotice() {
  tokenWatcher.forEach((tk) => {
    tk();
  });
}
export function tokenWatch(func) {
  tokenWatcher.push(func);
}

import { encode, decode } from "js-base64";

export function base64Encode(content) {
  return encode(content);
}

export function base64Decode(bytes) {
  if (bytes) {
    try {
      return decode(bytes);
    } catch (err) {
      return "";
    }
  }
  return "";
}

export function html2text(content) {
  return content
    .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
    .replace(/<[^>]+?>/g, "")
    .replace(/\s+/g, " ")
    .replace(/ /g, " ")
    .replace(/>/g, " ");
}

export default {
  checkEmail,
  checkEmpty,
  checkPhone,
  checkPassword,
  checkTaxNumber,
  formatFileSize,
  setStorage,
  getStorage,
  removeStorage,
  html2text,
  base64Encode,
  base64Decode,
  data2json,
  json2data,
  tokenNotice,
  tokenWatch,
};
