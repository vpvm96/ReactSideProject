import React from "react"
import styled from "styled-components"

const TodoListHeader = () => {
  return (
    <TodoHeaderWrapper>
      <TodoHeaderContainer>
        <TodoHeaderTitle>Test</TodoHeaderTitle>
      </TodoHeaderContainer>
    </TodoHeaderWrapper>
  )
}

const TodoHeaderWrapper = styled.div`
  height: 20%;
`

const TodoHeaderContainer = styled.div`
  width: 100%;
  height: 100%;
`

const TodoHeaderTitle = styled.h1`
  padding: 1rem;
`

export default TodoListHeader
