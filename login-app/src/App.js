import React, { Component } from 'react';
import './App.css';
import Login from './Login';

class App extends Component {

  constructor(){
    super();
    this.state = {}
  }
  
  render(){
    return (
      <div className="App">
        <Login></Login>
      </div>
    );
  }
}

export default App;
