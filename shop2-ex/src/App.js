import { createContext, useState } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { Button, Navbar, Nav, Container } from "react-bootstrap";

import axios from "axios";

import "./App.css";
import Detail from "./pages/detail";
import Data from "./data";

export const Context1 = createContext()

function App() {
    const [shoes, setShoes] = useState(Data);
    const [inventory] = useState([10, 11, 12]);
    const [addShoes, setAddShoes] = useState(2);
    const navigate = useNavigate();

    const onClickHandler = () => {
        axios
            .get(`https://codingapple1.github.io/shop/data${addShoes}.json`)
            .then((result) => {
                setShoes(shoes.concat(...result.data));
                setAddShoes(addShoes + 1);
            })
            .catch(e => console.error(e))
    }

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
                                        return <Card shoes={shoes[i]} i={i} key={i} />;
                                    })}
                                </div>
                            </div>
                            {addShoes < 4 && 
                                <Button
                                    variant='outline-secondary'
                                    onClick={onClickHandler}
                                >
                                    더보기
                                </Button>}
                        </>
                    }
                />
                <Route path='/detail/:id' element={
                    <Context1.Provider value={{inventory}}>
                        <Detail shoes={shoes} />
                    </Context1.Provider>
                    } 
                />
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

function Card({ shoes, i }) {
    return (
        <div className='col-md-4'>
            <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width='80%' alt='profile' />
            <h4>{shoes.title}</h4>
            <p>{shoes.content}</p>
        </div>
    );
}
export default App;