import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleclick2 = this.handleClick1.bind(this);
  }

  handleClick1(){
  console.log("Button one clicked");
  }

  handleclick3 = () => console.log("Button 3 clicked");

  render() {
  return (
    <div className="App">
   <button onClick={this.handleClick1()}>Click1</button>
   <button onClick={this.handleClick1}>Click2</button>
   <button onClick={this.handleclick2}>Click3</button>
   <button onClick={this.handleclick3}>Click4</button>
    </div>
  );
  }
}

export default App;
