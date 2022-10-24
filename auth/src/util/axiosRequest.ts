import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://reqres.in/",
  headers: { "Content-Type": "application/json" },
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    throw new Error(err)
  }
)

axiosInstance.interceptors.response.use(
  (config) => {
    return config
  },
  (err) => {
    throw new Error(err)
  }
)
