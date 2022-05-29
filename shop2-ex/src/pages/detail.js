import "./detail.css"

import { useEffect, useState } from "react"
import { Button, Nav } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { addItem } from '../store/productsSlice'
import { useDispatch } from "react-redux"

function Detail({ shoes }) {
    const {id} = useParams()
    const products = shoes.find((item) => item.id === parseInt(id))
    const [alert, setAlert] = useState(true)
    const [tab, setTab] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            setAlert(false)
        }, 2000)
    }, [])

    return (
        <div className='container'>
            {alert === true ? <div className='alert'>2초이내 구매시 할인</div> : null}
            <div className='row'>
                <div className='col-md-6'>
                    <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='100%' alt='profile' />
                </div>
                <div className='col-md-6'>
                    <h4 className='pt-5'>{products.title}</h4>
                    <p>{products.content}</p>
                    <p>{products.price}</p>
                    <Button className='button' variant='outline-secondary' onClick={() => {
                        dispatch(addItem( {id : products.id, name : products.title, count : 0} ))
                    }}>
                        Order
                    </Button>
                </div>
            </div>
            <Nav variant='tabs' defaultActiveKey='link0'>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(0);
                        }}
                        eventKey='link0'
                    >
                        버튼0
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(1);
                        }}
                        eventKey='link1'
                    >
                        버튼2
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => {
                            setTab(2);
                        }}
                        eventKey='link2'
                    >
                        버튼3
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} shoes={shoes} />
        </div>
    );
}

function TabContent({ tab, shoes }) {
    let [fade, setFade] = useState('')

    useEffect(() => {
        setTimeout(() => { setFade('end') }, 100)

        return () => {
            setFade('')
        }
    }, [tab])

    return <div className={`start ${fade}`}>
        { [<div>{ shoes[0].title }</div>, <div>내용1</div>, <div>내용2</div>][tab] }
    </div>
}
export default Detail;