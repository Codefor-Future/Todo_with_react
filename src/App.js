import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
    name:"",
    greet:"",
  }
 
  }
 
  render() {
    return (
      <div className="App">
        <h1>{this.state.greet+" "+ this.state.name}</h1>
        <input type="text" name="name"  placeholder="Name"/>
        <input type="text" name="greet" placeholder="greet" />

      </div>
    );
  }
}

export default App;
