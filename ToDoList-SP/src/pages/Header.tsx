import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderTitle>Todo List</HeaderTitle>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  height: 20%;
`

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
`

const HeaderTitle = styled.h1`
  padding: 1rem;
`

export default Header
