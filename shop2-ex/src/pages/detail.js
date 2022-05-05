import "./detail.css";

import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props) {
    const { id } = useParams();
    const products = props.shoes.find((item) => item.id === parseInt(id));

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='100%' alt='profile' />
                </div>
                <div className='col-md-6'>
                    <h4 className='pt-5'>{products.title}</h4>
                    <p>{products.content}</p>
                    <p>{products.price}</p>
                    <Button variant='outline-secondary'>Order</Button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
