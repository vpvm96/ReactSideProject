import React, { useState } from "react"
import { saveToken } from "../sessionStorage/authToken"
import { authCreateRequest, authLoginRequest } from "../api/authFetcher"

interface FormType {
  email: string
  password: string
  name?: string
}

const useForm = (initialValue: FormType) => {
  const [formValue, setFromValue] = useState<FormType>(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFromValue((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formValue.name) {
      const { email, password } = formValue
      const res = await authLoginRequest("user/login", email, password)
      if (!res.token) {
        alert("로그인에 실패하였습니다.")
      } else {
        saveToken(res.token)
        window.location.replace("/")
      }
    } else {
      const { email, password, name } = formValue
      const res = await authCreateRequest("user/register", email, password, name)
      console.log(res)
    }
  }

  return {
    formValue,
    handleChange,
    handleSubmit,
  }
}

export default useForm
