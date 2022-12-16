import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import ErrorPage from "./ErrorPage"

const TodoListDetailPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
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
  if (error) return <ErrorPage />

  return (
    <TodoDetailWraper>
      <TodoDetailContainer>
        <TodoDetailDescBox>
          <TodoDetailTitleBox>제목: {formData.title}</TodoDetailTitleBox>
          <TodoDetailContentBox>내용: {formData.content}</TodoDetailContentBox>
        </TodoDetailDescBox>
        <TodoDetailBtnBox>
          <TodoDetailBackButton onClick={() => navigate(-1)}>
            나가기
          </TodoDetailBackButton>
        </TodoDetailBtnBox>
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
`

const TodoDetailDescBox = styled.div`
  width: 50%;
`

const TodoDetailBtnBox = styled.div`
  width: 50%;
  margin-top: 1rem;
`

const TodoDetailTitleBox = styled.div`
  width: 50%;
  margin-bottom: 1rem;
`
const TodoDetailContentBox = styled.div`
  width: 50%;
`
const TodoDetailBackButton = styled.button`
  width: 100px;
`

export default TodoListDetailPage
