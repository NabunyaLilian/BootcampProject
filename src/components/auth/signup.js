import React, { Component } from 'react';
import { connect } from "react-redux";
import TextInputField from '../common/TextInputField';
import {signup} from './actions/signup'
import PropTypes from "prop-types";

export class Signup extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      FirstName: "",
      isAdmin: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const { Username, Password, FirstName, isAdmin } = this.state;
    this.props.signup(Username, Password, FirstName, isAdmin);
  }
  changeHandler = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h4 className="text-center">Sign up to have an account</h4>
            <form onSubmit={this.handleSubmit}>
              <TextInputField
                name="Username"
                placeholder="username"
                type="text"
                classname="form-control form-control-lg"
                icon="fas fa-envelope"
                changed = {this.changeHandler}
              />
               <TextInputField
                name="FirstName"
                placeholder="firstname"
                type="text"
                classname="form-control form-control-lg"
                icon="fas fa-envelope"
                changed = {this.changeHandler}
              />  
              <TextInputField
                name="Password"
                placeholder="password"
                type="password"
                classname="form-control form-control-lg"
                icon="fas fa-envelope"
                changed = {this.changeHandler}
              />  
            <select class="custom-select">
                <option selected>isAdmin</option>
                <option value="True">True</option>
                <option value="False">False</option>
            </select>
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

Signup.propTypes = {
    signup: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  loginsuccess: state.loginReducer.user,
  loginerror: state.loginReducer.error,
});



export default connect(mapStateToProps, {signup})(Signup);
