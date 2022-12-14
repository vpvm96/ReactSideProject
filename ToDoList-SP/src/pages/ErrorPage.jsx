import React from "react"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      에러야 나가!!!!!!!
      <button>
        <Link to="/">나가</Link>
      </button>
    </div>
  )
}

export default ErrorPage
