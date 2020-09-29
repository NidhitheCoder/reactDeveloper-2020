import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from "./components/searchBox/searchbox.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
    // this.handleChange = this.handleChange.bind(this); // when use arrow functions no need to bind
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // handleChange(e) {
  //   this.setState({searchField:e.target.value});
  // }

  handleChange = (e) => {
    this.setState({searchField:e.target.value});
  }

  render() {
    // const monster = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1> Monster Rolodex</h1>
        <SearchBox
        placeholder="Search monsters"
        handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

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
