import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { todoCreate, todoUpdate, todoDelete } from "../redux/modules/todolist"
import useTodoForm from "../hooks/useTodoForm"
import TodoListBody from "../components/TodoList/TodoListBody"
import styled from "styled-components"

const TodoListPage = () => {
  const dispatch = useDispatch()
  const todoFormData = useSelector((state) => state.todolist)
  const { register, handleSubmit, reset, errors } = useTodoForm()

  const handleTodoCreate = (todoFormValue) => {
    dispatch(todoCreate({ id: uuidv4(), value: todoFormValue }))
  }

  const handleTodoUpdate = (updated) => {
    dispatch(todoUpdate(updated))
  }

  const handleTodoDelete = (id) => () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      alert("삭제 되었습니다.")
    } else {
      alert("취소 되었습니다.")
      return
    }
    dispatch(todoDelete(id))
  }

  return (
    <TodoPageWrap>
      <TodoListBody
        todoFormData={todoFormData}
        error={errors}
        reset={reset}
        onTodoFormEvent={register}
        onTodoCreateEvent={handleTodoCreate}
        onTodoUpdateEvent={handleTodoUpdate}
        onTodoDeleteEvent={handleTodoDelete}
        onTodoFormSubmitEvent={handleSubmit}
      />
    </TodoPageWrap>
  )
}

const TodoPageWrap = styled.div`
  width: 100%;
  height: 100vh;
`

export default TodoListPage
