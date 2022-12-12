import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { todoCreate, todoUpdate, todoDelete } from "../redux/modules/todolist"
import useTodoForm from "../hooks/useTodoForm"
import TodoListHeader from "../components/TodoList/TodoListHeader"
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
    dispatch(todoDelete(id))
  }

  return (
    <TodoPageWrap>
      <TodoListHeader />
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
