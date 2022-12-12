import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoListPage from "../pages/TodoListPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
