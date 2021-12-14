import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './App.css';
import Content from './content.js';
import Detail from './Detail.js';
import Data from './data.js';
import Cart from './Cart.js';
import { Link, Route, Switch } from 'react-router-dom';

export let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([9, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Edit Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <Switch>

      <Route exact path='/'>
      <div className ="background">
        <h1>20% Season Off</h1>
        <p>This is a have a All type design greate Edit Shop! </p>
        <p>
        <button type="button" class="btn btn-primary">Primary</button>
        </p>
      </div>

      <div>
        <재고context.Provider value={재고}>
        <Content shoes={shoes} shoes변경={shoes변경} 재고={재고}/>
        </재고context.Provider>
      </div>

      </Route>
    
      <Route path='/detail/:id'>
        <재고context.Provider value={재고}>
        <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
        </재고context.Provider>
      </Route>

      <Route path='/cart'>
        <Cart></Cart>
      </Route>

      </Switch>
      
    </div>    
  );
}

export default App;