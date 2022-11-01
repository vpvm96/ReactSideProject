import { axiosInstance } from "../util/axiosRequest"

export const authCreateRequest = async (url: string, email: string, password: string, name: string) => {
  const res = await axiosInstance.post(url, {
    email: email,
    password: password,
    name: name,
  })
  return res.data
}

export const authLoginRequest = async (url: string, email: string, password: string) => {
  const res = await axiosInstance.post(url, {
    email: email,
    password: password,
  })
  return res.data
}
