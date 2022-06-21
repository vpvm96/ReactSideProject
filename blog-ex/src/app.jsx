/* eslint-disable */
import React, { useState } from 'react';
import Modal from './components/modal';
import styles from './app.module.css';

function App() {

  let [title, setTitle] = useState(['파이썬', '자바', '자바스크립트']);
  let [day, setDay] = useState(['2월 17일 발행', '4월 17일 발행', '6월 17일 발행']);
  let [count, setCount] = useState(0);
  let [modal, setModal] = useState(false);
  let [button, setButton] = useState(0);
  let [input, setInput] = useState('');

  function changeTitle() {
    let newTitle = [...title];
    newTitle[0] = 'C++';
    setTitle( newTitle );
  }

  return (
    <div className={styles.body}>
      <div className={styles.navbar}>
        <div>Blog EX</div>
      </div>
      {
        title.map((v, i) => {
          return(
          <div className={styles.list} key={i}>
            <h3 onClick={ () => { setButton(i) } }>
            { title[i] } 
            <span onClick={ () => { setCount(count + 1) } }>👍</span> { count }
            </h3>
            <p>{ day[i] }</p>
            <hr/>
          </div>
          )
        })
      }
      
      <div className={styles.publish}>
        <input className={styles.input} onChange={ (e) => { setInput(e.target.value) } }/>
        <button className={styles.button} onClick={ () => {
          let titleCopy = [...title];
          titleCopy.unshift(input);
          setTitle( titleCopy );
        } }>
          저장 
        </button>
      </div>
      
      {/* <input onChange = { (e) => { setInput(e.target.value) } } /> */}

      <button onClick={() => { setModal(!modal) }}>모달버튼</button>

      {
        modal === true
        ? <Modal title={ title } button={ button } />
        : null
      }
    </div>
  );
}

export default App;
