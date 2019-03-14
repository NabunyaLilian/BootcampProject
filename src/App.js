import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//  Load components
import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Products from "./components/products/products";
import Signup from "./components/auth/signup";


export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            {/* <Route exact path="/" component={Landing} /> */}
            <Route exact path="/" component={Login} />
            <Route path="/users/signup" component={Signup} />
            <Route exact path="/products" component={Products} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
