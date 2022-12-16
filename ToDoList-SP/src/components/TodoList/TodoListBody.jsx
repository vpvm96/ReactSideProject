import TodoListContent from "./TodoListContent"
import TodoCustomInput from "./TodoCustomInput"
import styled from "styled-components"

const TodoListBody = ({
  todoFormData,
  error,
  reset,
  onTodoFormEvent,
  onTodoCreateEvent,
  onTodoUpdateEvent,
  onTodoDeleteEvent,
  onTodoFormSubmitEvent,
}) => {
  const handleTodoFormSubmit = (data, e) => {
    onTodoCreateEvent(data)
    reset({ title: "", content: "" })
    e.target[0].focus()
  }

  return (
    <TodoBodyWrap>
      <TodoBodyContainer>
        <TodoBodyFormBox>
          <TodoBodyTodoForm
            onSubmit={onTodoFormSubmitEvent(handleTodoFormSubmit)}
          >
            <TodoCustomInput
              type="text"
              id="title"
              labelText="제목"
              htmlFor="title"
              placeholder="제목을 입력해주세요."
              todoEvent={onTodoFormEvent("title")}
              errorMsg={error.title?.message}
            />
            <TodoCustomInput
              type="text"
              id="content"
              labelText="내용"
              htmlFor="content"
              placeholder="내용을 입력해주세요."
              todoEvent={onTodoFormEvent("content")}
              errorMsg={error.content?.message}
            />
            <TodoBodyFormButton type="submit">클릭</TodoBodyFormButton>
          </TodoBodyTodoForm>
        </TodoBodyFormBox>
        <TodoBodyContentBox>
          {todoFormData.map((todo) => (
            <TodoListContent
              key={todo.id}
              todoFormData={todo}
              onTodoUpdateEvent={onTodoUpdateEvent}
              onTodoDeleteEvent={onTodoDeleteEvent}
            />
          ))}
        </TodoBodyContentBox>
      </TodoBodyContainer>
    </TodoBodyWrap>
  )
}

const TodoBodyWrap = styled.div`
  height: 80%;
`

const TodoBodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 5rem;
`

const TodoBodyFormBox = styled.div`
  height: 20%;
`

const TodoBodyContentBox = styled.div`
  height: 80%;
`

const TodoBodyTodoForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 3rem;
`
const TodoBodyFormButton = styled.button`
  width: 200px;
  height: 20px;
`

export default TodoListBody
