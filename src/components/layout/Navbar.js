import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <h3>StoreManager</h3>
        </Link>
          <div className="collapse navbar-collapse">
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
