import React, { Component } from 'react';
import { connect } from "react-redux";
import TextInputField from '../common/TextInputField';
import {login} from './actions/login'
import PropTypes from "prop-types";

export class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    const { Username, Password } = this.state;
    this.props.login(Username, Password);
  }
  changedHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="container">n
        <div className="row">
          <div className="col-md-6 m-auto">
            <h4 className="text-center">Sign in to your account</h4>
            <form onSubmit={this.onSubmit} id="loginForm">
              <TextInputField
                name="Username"
                placeholder="username"
                type="text"
                classname="form-control form-control-lg"
                icon="fas fa-envelope"
                changed = {this.changedHandler}
              />

              <TextInputField
                name="Password"
                placeholder="Password"
                type="password"
                classname="form-control form-control-lg"
                icon="fas fa-unlock-alt"
                changed = {this.changedHandler}
              />
              <input
                type="submit"
                className="btn btn-dark btn-block mt-4"
                value="Sign in"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  loginsuccess: state.loginReducer.user,
  loginerror: state.loginReducer.error,
});



export default connect(mapStateToProps, {login})(Login);
