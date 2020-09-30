import React from "react";
import "./App.css";
import {Switch,Route} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import Header from './components/header/header.component';
import SignInAndSignUp  from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

// const HatPage = () =>(
//   <div>
//   <h1>HATS PAGE</h1></div>
// )

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInAndSignUp} />
    </Switch>
    </div>
  );
}

export default App;
