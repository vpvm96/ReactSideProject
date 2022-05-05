import "./App.css";

import { useState } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { Button, Navbar, Nav, Container } from "react-bootstrap";

import Detail from "./pages/detail";
import Data from "./data";

function App() {
    const [shoes] = useState(Data);
    const navigate = useNavigate();

    return (
        <div className='App'>
            <Navbar bg='light' variant='light'>
                <Container>
                    <Navbar.Brand>Fabrica</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/detail");
                            }}
                        >
                            Detail
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/event");
                            }}
                        >
                            Event
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <div className='main-blog'></div>
                            <div className='container'>
                                <div className='row'>
                                    {shoes.map((a, i) => {
                                        return <Card shoes={shoes[i]} i={i} />;
                                    })}
                                </div>
                            </div>
                            <Button variant='outline-secondary'>Check</Button>
                        </>
                    }
                />
                <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
                <Route path='/event' element={<EventPage />}>
                    <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>} />
                    <Route path='two' element={<p>생일기념 쿠폰받기</p>} />
                </Route>
            </Routes>
        </div>
    );
}

function EventPage() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    );
}

function Card(props) {
    return (
        <div className='col-md-4'>
            <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width='80%' alt='profile' />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
        </div>
    );
}
export default App;