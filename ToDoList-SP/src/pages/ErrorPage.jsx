import React from "react"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <h1>에러야 나가!!!!!!!</h1>
      <button>
        <Link to="/">나가</Link>
      </button>
    </div>
  )
}

export default ErrorPage
