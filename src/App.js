import React from 'react';
import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import Welcome from './components/Welcome';
import Comment from './components/Comment';
import Car from './components/Car';
import Menu from './components/MenuComponent';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy my restaurant!',
  author: {
    name: 'Alberto',
    avatarUrl: "./images/images/alberto.png"
  }
}

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>    
    )
  }
  
}


export default App;
