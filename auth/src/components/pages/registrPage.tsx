import React from "react"
import RegisterForm from "../register/registerForm"
import useForm from "../../hook/useForm"
import styled from "styled-components"

const RegisterPage = () => {
  const { formValue, handleChange, handleSubmit } = useForm({
    email: "",
    password: "",
    name: "",
  })

  return (
    <RegisterMainPage>
      <RegisterHeader>Sign Up</RegisterHeader>
      <RegisterForm formValue={formValue} handleChange={handleChange} handleSubmit={handleSubmit} />
    </RegisterMainPage>
  )
}

const RegisterMainPage = styled.div`
  width: 100%;
`

const RegisterHeader = styled.div`
  width: 15%;
  text-align: center;
`

export default RegisterPage
