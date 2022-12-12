import React from "react"
import styled from "styled-components"

const TodoListContent = ({
  todoFormData,
  onTodoDeleteEvent,
  onTodoUpdateEvent,
}) => {
  const { id, title, content, isDone } = todoFormData

  const handleTodoUpdate = (status) => () => {
    const isDone = status === true ? true : false

    onTodoUpdateEvent({ ...todoFormData, isDone })
  }

  return (
    <TodoContentContainer>
      <TodoTitle>{title}</TodoTitle>
      <TodoContent>{content}</TodoContent>
      {isDone === false ? (
        <TodoDataDeleteButton onClick={handleTodoUpdate(true)}>
          완료
        </TodoDataDeleteButton>
      ) : (
        <TodoDataDeleteButton onClick={handleTodoUpdate(false)}>
          취소
        </TodoDataDeleteButton>
      )}
      <TodoDataDeleteButton onClick={onTodoDeleteEvent(id)}>
        삭제
      </TodoDataDeleteButton>
    </TodoContentContainer>
  )
}

const TodoContentContainer = styled.div`
  width: 100%;
`

const TodoTitle = styled.h1`
  width: 100%;
`

const TodoContent = styled.p`
  width: 100%;
`

const TodoDataDeleteButton = styled.button`
  width: 100px;
  height: 20px;
`

export default TodoListContent
