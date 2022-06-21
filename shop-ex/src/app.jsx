import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Item from './components/item';
import Data from './data';
import styles from './app.module.css';

function App() {

  let [shoes, setShoes] = useState([Data]);

  return (
    <div className={styles.app}>
      <Navbar className={styles.navbar} bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">홈</Nav.Link>
          <Nav.Link href="#features">소개</Nav.Link>
          <Nav.Link href="#pricing">가격</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className={styles.jumbotron}>
        <h1>20% 파격세일</h1>
        <p>오늘 모든 신발 20% 세일 중</p>
        <Button variant="primary">Primary</Button>
      </div>
      <div className={'container'}>
        <div className={'row'}>
          {
            shoes.map((v, i) => {
              return <Item shoes={shoes[v]} i={i}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
