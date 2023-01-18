import React from "react"
import styled from "styled-components"

interface TodoCustomInputProps {
  type: string
  id: string
  labelText: string
  placeholder: string
  todoEvent: () => void
  errorMsg: string
}

const TodoCustomInput = ({
  type,
  id,
  labelText,
  placeholder,
  todoEvent,
  errorMsg,
}: TodoCustomInputProps) => {
  return (
    <React.Fragment>
      <TodoInputLabel htmlFor={id}>{labelText}</TodoInputLabel>
      <TodoInput type={type} id={id} placeholder={placeholder} {...todoEvent} />
      <TodoBodyFormErrorAlert>{errorMsg}</TodoBodyFormErrorAlert>
    </React.Fragment>
  )
}

const TodoInputLabel = styled.label`
  width: 300px;
`

const TodoInput = styled.input`
  width: 300px;
`

const TodoBodyFormErrorAlert = styled.p`
  width: 100px;
`

export default TodoCustomInput
