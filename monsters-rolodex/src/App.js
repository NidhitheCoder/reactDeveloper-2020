import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name : "Smith"
    }
  }
render() {
  return(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hi.. {this.state.name}!! Welome to <code>Monsters</code> rolodex.
      </p>
      <p>Name: {this.state.name}</p>
     <button onClick={()=> this.setState({name:"Julie"})}>Change Name</button>
    </header>
  </div>
  )
}
};


// return using function
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welome to <code>Monsters</code> rolodex.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );

export default App;
