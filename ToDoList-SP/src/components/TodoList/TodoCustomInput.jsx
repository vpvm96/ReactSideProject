import React from "react"
import styled from "styled-components"

const TodoCustomInput = ({
  type,
  id,
  labelText,
  htmlFor,
  placeholder,
  todoEvent,
  errorMsg,
}) => {
  return (
    <React.Fragment>
      <TodoInputLabel htmlFor={htmlFor}>{labelText}</TodoInputLabel>
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
