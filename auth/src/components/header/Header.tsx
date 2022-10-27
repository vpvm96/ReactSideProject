import React from "react"
import { getToken } from "../../sessionStorage/authToken"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const items = ["login", "register"]
  const token = getToken()
  const navigate = useNavigate()

  return (
    <ul style={{ listStyle: "none" }}>
      {!token
        ? items.map((item) => (
            <li key={item} onClick={() => navigate(`/${item}`)}>
              {item}
            </li>
          ))
        : items.slice(1, items.length).map((item) => {
            return (
              <li key={item} onClick={() => navigate(`/${item}`)}>
                {item}
              </li>
            )
          })}
      <li onClick={() => navigate("/")}>Go Main</li>
    </ul>
  )
}

export default Header
