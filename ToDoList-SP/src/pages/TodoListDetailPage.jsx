import { useLocation } from "react-router-dom"
import styled from "styled-components"

const TodoListDetailPage = () => {
  const location = useLocation()
  const { title, content } = location.state

  return (
    <TodoDetailWraper>
      <TodoDetailContainer>
        <TodoDetailTitleBox>제목 :{title}</TodoDetailTitleBox>
        <TodoDetailContentBox>내용: {content}</TodoDetailContentBox>
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
