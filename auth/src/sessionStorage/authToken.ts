const TOKEN = "TOKEN"

export function getToken() {
  return sessionStorage.getItem(TOKEN)
}

export function saveToken(authToken: string) {
  sessionStorage.setItem(TOKEN, authToken)
}

export function clearToken() {
  sessionStorage.clear()
}
