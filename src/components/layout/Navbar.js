import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.png'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5">
        <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo2} alt="logo" height="60" width="220" />
        </Link>
          <div className="collapse navbar-collapse">
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
