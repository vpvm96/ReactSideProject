import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [날짜, 날짜변경] = useState(['2월 17일 발행', '3월 17일 발행', '4월 17일 발행', '5월 17일 발행']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  function 제목바꾸기() {
    // state 는 직접 건들지 말것
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }
  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      {글제목.map((글, i) => { // i 는 0~ 게속 반복되는 문장
        return (
          <div className='list' key={i}>
            <h3 onClick={() => {누른제목변경(i) } } > {글} <span onClick={() => 
            { 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
            <p>{날짜[i]}</p>
            <hr/>
          </div>
        );
      })}
      {/* 
      <button onClick={() => {누른제목변경(0) } }>버튼</button>
      <button onClick={() => {누른제목변경(1) } }>버튼2</button>
      <button onClick={() => {누른제목변경(2) } }>버튼3</button>
       */}
      {/* {입력값}
      <input onChange={ (e) => {입력값변경( e.target.value ) } }/> */}

      <div className = 'publish'>
        <input onChange={ (e) => {입력값변경(e.target.value)} }/>
        <button onClick = { () => {
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경( arrayCopy );
        } }>저장</button>
      </div>

      <button onClick={ () => {modal변경(!modal)} }>버튼</button>
        
      {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
      </div>
  );
}

function Modal(props) {
  // props 사용법
  return (
    <div className='modal'>
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

// 옛날문법 사용법 옛날문법의 단점들

class profile extends React.Component {
  constructor() {
    super();
    this.state = { name : 'kim', age : 30 }
  }

  changeName() {
    this.setState( {name : 'park'} )
  }

  render() {
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={ this.changeName.bind(this) }>버튼</button>
      </div>
    )
  }
}

export default App;
