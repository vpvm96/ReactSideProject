import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoListPage from "../pages/TodoListPage"
import TodoListDetailPage from "../pages/TodoListDetailPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/:todoId" element={<TodoListDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
