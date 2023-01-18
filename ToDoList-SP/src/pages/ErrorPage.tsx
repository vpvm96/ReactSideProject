import React from "react"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <h1>이 곳은 지옥입니다 나가세요.</h1>
      <button>
        <Link to="/">나가기</Link>
      </button>
    </div>
  )
}

export default ErrorPage
