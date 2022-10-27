import React from "react"
import styled from "styled-components"

interface FormProps {
  formValue: {
    email: string
    password: string
    name?: string
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const RegisterForm = ({ formValue, handleChange, handleSubmit }: FormProps) => {
  return (
    <FormMainContainer>
      <FormInputContainer onSubmit={handleSubmit}>
        <FormInputBox>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formValue.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </FormInputBox>
        <FormInputBox>
          <label>password</label>
          <input
            type="password"
            name="password"
            value={formValue.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </FormInputBox>
        <FormInputBox>
          <label>user name</label>
          <input
            type="text"
            name="name"
            value={formValue.name}
            placeholder="Enter your user name"
            onChange={handleChange}
          />
        </FormInputBox>
        <FormButtonContainer type="submit"> Button </FormButtonContainer>
      </FormInputContainer>
    </FormMainContainer>
  )
}

const FormMainContainer = styled.div`
  width: 100%;
`

const FormInputContainer = styled.form`
  width: 80%;
`

const FormInputBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const FormButtonContainer = styled.button`
  width: 20%;
`

export default RegisterForm
