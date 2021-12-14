import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Data from './data.js';
import axios from 'axios';

import {재고context} from './App.js'




function Content (props) {

  let [shoes, shoes변경] = useState(Data);
  let 재고 = useContext(재고context);
  let history = useHistory();

  return (
  <div className ='container'>
          <div className ='row'>
          {shoes.map((sho, i) => {
            return(
              <div className ='col-md-4' key={i} onClick={()=>{ history.push(`/detail/${+ sho.id}`) }}>
                <img src= { 'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg' } width ='100%'/>
                <h4> { sho.title }</h4>
                <p>{ sho.content } & { sho.price }</p>
                <Test></Test>
              </div>
            );
          })} 
      </div>

      <button className ='btn btn-primary' onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{ 
          console.log(result.data)
          shoes변경( [...shoes, ...result.data ] );
        })
        .catch(()=>{        
          console.log('실패했어요')
        })      
        }}>더보기</button>
  </div>
  );
};

function Test() {
  let 재고 = useContext(재고context);
  return <p>{재고[0]}</p>
}

export default Content;