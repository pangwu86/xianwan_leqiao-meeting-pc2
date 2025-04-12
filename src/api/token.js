const TOKEN_NAME = "meetopia_TOKEN";

export function getToken() {
  return window.localStorage.getItem(TOKEN_NAME);
}

export function setToken(token) {
  window.localStorage.setItem(TOKEN_NAME, token);
}

export function clearToken() {
  window.localStorage.removeItem(TOKEN_NAME);
}
