import React from "react"
import styled from "styled-components"

interface LoginFormProps {
  formValue: {
    email: string
    password: string
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const LoginForm = ({ formValue, handleChange, handleSubmit }: LoginFormProps) => {
  return (
    <LoginMainPage>
      <LoginFormContainer onSubmit={handleSubmit}>
        <LoginBox>
          <label>Email</label>
          <input
            type="email"
            value={formValue.email}
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </LoginBox>
        <LoginBox>
          <label>password</label>
          <input
            type="password"
            value={formValue.password}
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </LoginBox>
        <LoginButton type="submit">button</LoginButton>
      </LoginFormContainer>
    </LoginMainPage>
  )
}

const LoginMainPage = styled.div`
  width: 100%;
`

const LoginFormContainer = styled.form`
  width: 80%;
`

const LoginBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const LoginButton = styled.button`
  width: 20%;
`
export default LoginForm
