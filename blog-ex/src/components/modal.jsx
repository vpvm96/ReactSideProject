import React from 'react'
import styles from './modal.module.css';

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <h2> { props.title[props.button] } </h2>
      <p>제목</p>
      <p>상세내용</p>
    </div>
  )
}

export default Modal