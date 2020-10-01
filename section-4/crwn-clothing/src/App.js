import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import {auth} from './firebase/firebase.utlis';

// const HatPage = () =>(
//   <div>
//   <h1>HATS PAGE</h1></div>
// )

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser : null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
   this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user });
      console.log(user);
    })
  };

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
