import TodoListContent from "./TodoListContent"
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
            <TodoBodyTitleInputLabel htmlFor="title">
              타이틀
            </TodoBodyTitleInputLabel>
            <TodoBodyTitleInput
              type="text"
              id="title"
              placeholder="제목을 입력해주세요."
              {...onTodoFormEvent("title")}
            />
            <TodoBodyFormErrorAlert>
              {error.title?.message}
            </TodoBodyFormErrorAlert>
            <TodoBodyContentInputLabel htmlFor="content">
              내용
            </TodoBodyContentInputLabel>
            <TodoBodyContentInput
              type="text"
              id="content"
              placeholder="내용을 입력해주세요."
              {...onTodoFormEvent("content")}
            />
            <TodoBodyFormErrorAlert>
              {error.content?.message}
            </TodoBodyFormErrorAlert>
            <TodoBodyFormButton type="submit">클릭</TodoBodyFormButton>
          </TodoBodyTodoForm>
        </TodoBodyFormBox>
        <TodoBodyContentBox>
          {todoFormData.map((todo) => (
            <TodoListContent
              key={todo.id}
              todoFormData={todo}
              error={error}
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

const TodoBodyTitleInputLabel = styled.label`
  width: 300px;
`

const TodoBodyTitleInput = styled.input`
  width: 300px;
`
const TodoBodyContentInputLabel = styled.label`
  width: 300px;
`

const TodoBodyContentInput = styled.input`
  width: 300px;
`

const TodoBodyFormErrorAlert = styled.p`
  width: 100px;
`

export default TodoListBody
