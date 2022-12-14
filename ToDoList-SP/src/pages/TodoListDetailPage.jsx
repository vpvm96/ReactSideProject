import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import ErrorPage from "./ErrorPage"

const TodoListDetailPage = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!location) return
    if (location.state) {
      setFormData(location.state)
    } else {
      setError(true)
    }
  }, [location])
  if (error) {
    return <ErrorPage />
  }
  return (
    <TodoDetailWraper>
      <TodoDetailContainer>
        <TodoDetailTitleBox>제목 :{formData.title}</TodoDetailTitleBox>
        <TodoDetailContentBox>내용: {formData.content}</TodoDetailContentBox>
      </TodoDetailContainer>
    </TodoDetailWraper>
  )
}

const TodoDetailWraper = styled.div`
  width: 100%;
  height: 100vh;
`

const TodoDetailContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TodoDetailTitleBox = styled.div`
  width: 50%;
  margin-bottom: 1rem;
`
const TodoDetailContentBox = styled.div`
  width: 50%;
`
export default TodoListDetailPage
