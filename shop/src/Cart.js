import React from 'react'
import { Table } from 'react-bootstrap';
import  { connect } from 'react-redux';


function Cart(props) {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {
            props.state.map((a, i)=>{
              return (
                <tr key ={i}>
                  <td>{ a.id }</td>
                  <td>{ a.name }</td>
                  <td>{ a.quan }</td>
                  <td>
                    <button onClick={()=>{ props.dispatch({ type : '수량증가', payload : a.id }) }}>+</button>
                    <button onClick={()=>{ props.dispatch({ type : '수량감소', payload : a.id }) }}>-</button>
                  </td>                     
                </tr>
              )
            })
          }

        </tbody>
      </Table>
      { props.alert열기 === true
        ? (<div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button onClick={()=>{ props.dispatch({ type : 'alert닫기'}) }}>x</button>
        </div>)
        : null
      }
    </div>
  )
}

function state를props화(state) {
  console.log(state);
  return {
    state : state.reducer,
    alert열기 : state.reducer2
  }
}

export default connect(state를props화)(Cart)
