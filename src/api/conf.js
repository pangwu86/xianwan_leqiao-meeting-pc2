let serverUrl = import.meta.env.VITE_SERVER_URL;
console.log("SERVER_URL:" + serverUrl);

// 基本url
export function getBaseUrl(url) {
  return serverUrl;
}

// 后置方法
export function handleReturn(respData) {
  return Promise.resolve(respData);
}
