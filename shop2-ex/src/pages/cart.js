import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { upCount } from '../store/productsSlice'

function Cart() {
    let data = useSelector((state) => state)
    let dispatch = useDispatch()

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.products.map((item, i) =>
                            <tr key={i}>
                                <td>{data.products[i].id}</td>
                                <td>{data.products[i].name}</td>
                                <td>{data.products[i].count}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(upCount(data.products[i].id))
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart