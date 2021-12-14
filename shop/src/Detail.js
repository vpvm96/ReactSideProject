import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CSSTransition } from "react-transition-group"
import { Nav } from 'react-bootstrap';
import { 재고context } from './App';
import { connect } from 'react-redux';

import styled from 'styled-components'; // 편리성이 적음 사용하고싶으면 사용

import './Detail.css';


let 박스 = styled.div`
  padding-top: 30px;
`;
let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {

  let [alert, alert변경] = useState(true);
  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  let 재고 = useContext(재고context);

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
  }, [alert]);

  let test = props;

  let { id } = useParams();
  let img = props.shoes[id].url;
  let history = useHistory();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  // let 찾은상품 = props.shoes.find(function (상품){
  //   return 상품.id == id
  // });

  return (
    <div className='container'>
      {console.log(props)}
      <박스>
        <제목 className='red'>Detail</제목>
      </박스>

      {alert === true ? (
        <div className='my-alert2'>
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}

      <div className='row'>
        <div className='col-md-6'>
          <img src={img} width='100%'/>
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <Info 재고={props.재고} />
          <button
            className='btn btn-danger'onClick={() => {

              props.재고변경([9, 11, 12]);
              props.dispatch({type : '항목추가', payload : { id : 찾은상품.id, name : 찾은상품.title, quan : 1} });
              history.push('/cart');

          }}>주문하기</button>
          &nbsp;
          <button
            className='btn btn-danger'onClick={() => {
          
              history.push('/');
          
          }}>뒤로가기</button>
        </div>
      </div>

      <Nav className='mt-5' variant='tabs' defaultActiveKey='link-0'>
        <Nav.Item>
          <Nav.Link eventKey='link-0' onClick={()=>{ 스위치변경(false); 누른탭변경(0) }}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1' onClick={()=>{ 스위치변경(false); 누른탭변경(1) }}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
      
      <CSSTransition in={스위치} classNames='wow' timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {

  useEffect(()=>{
    props.스위치변경(true);
  });
  
  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다.</div>
  } else if (props.누른탭 === 1) {
    return <div>1번째 내용입니다.</div>
  } else if (props.누른탭 === 2) {
    return <div>2번째 내용입니다.</div>
  }
}


function Info(props) {
  return <p>재고 : {props.재고[0]}</p>;
}


function state를props화(state) {
  console.log(state);
  return {
    state : state.reducer,
    alert열기 : state.reducer2
  }
}

export default connect(state를props화)(Detail)
