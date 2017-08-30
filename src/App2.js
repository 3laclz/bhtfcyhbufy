import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import calculator from './Components/Header.component';



class App extends Component {
  
  constructor(){
    super();
    this.state = {name: "Fluke", age: 20};
  }

  getVal() {
    return "getVal";
  }
  onClick(){
    this.setState({name: "Bob"});
  }

  setAge(e){
    const age = e.target.value;
    this.setState({age: age});
  }


  render() {
   {/* const list = [
    <Footer />,
    <Footer />,
    <Footer />,
    ]; */}

      const myname = "Fluke";
        return (
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<p>Test adding text to app.</p>
        <div> 5555555555555555555555555</div>*/}
        {/*<div>hello, {myname}</div>
        <div>Calculate 3+2 = {3+2}</div>
        <div>Call function {(() => {return 1234})()}</div>
        <div>Call getVal method : {this.getVal()}</div>
        <div>age : {this.age}</div>
        
        <Footer />*/}
        <div>My name is {this.state.name}</div>
        <div>Age : {this.state.age}</div>
        <button onClick= {this.onClick.bind(this)}>Click Me Please</button>
        <input onChange= {this.setAge.bind(this)} />
        <calculator title= "Test title นะจ๊ะ" name="Dear" />
        <calculator title= {this.state.name} />

      </div>
      </div>
    );
  }
}

export default App;
