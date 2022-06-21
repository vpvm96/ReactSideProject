import React from 'react'
import styles from './item.module.css'

const Item = (props) => {
  return (
    <div className={styles.container}>
        <div className={'col-md-4'}>
          <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width='100%' alt='~' />
          <h4>{ props.shoes.title }</h4>
          <p>{ props.shoes.content } & { props.shoes.price }</p>
        </div>
    </div>
  )
}

export default Item