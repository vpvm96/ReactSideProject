import { axiosInstance } from "../util/axiosRequest"

export const authCreateRequest = async (
  url: string,
  email: string,
  password: string,
  passwordCheck: string,
  userName: string
) => {
  const res = await axiosInstance.post(url, {
    email: email,
    password: password,
    passwordCheck: passwordCheck,
    userName: userName,
  })
  return res.data
}
