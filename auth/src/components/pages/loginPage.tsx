import React from "react"
import LoginForm from "../login/loginForm"
import useForm from "../../hook/useForm"
import styled from "styled-components"

const LoginPage = () => {
  const { formValue, handleChange, handleSubmit } = useForm({
    email: "",
    password: "",
  })

  return (
    <LoginMainPageContainer>
      <LoginHeader>Login</LoginHeader>
      <LoginForm formValue={formValue} handleChange={handleChange} handleSubmit={handleSubmit} />
    </LoginMainPageContainer>
  )
}

const LoginMainPageContainer = styled.div`
  width: 100%;
`

const LoginHeader = styled.div`
  width: 15%;
  text-align: center;
`

export default LoginPage
