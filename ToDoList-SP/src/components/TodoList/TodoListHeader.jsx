import React from "react"
import styled from "styled-components"

const TodoListHeader = () => {
  return (
    <TodoHeaderWrapper>
      <TodoHeaderContainer>
        <h1>Test</h1>
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

export default TodoListHeader
