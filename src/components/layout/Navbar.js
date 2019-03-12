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
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/users/login" className="nav-link">
                  Sign-in
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users/signup" className="nav-link">
                  <button type="button" className="btn btn-sm btn-light">
                    Get started
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
