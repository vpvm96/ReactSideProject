import React from "react"
import { Routes, Route } from "react-router-dom"
import MainPage from "./components/pages/mainPage"
import RegisterPage from "./components/pages/registrPage"
import LoginPage from "./components/pages/loginPage"
import Header from "./components/header/Header"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
