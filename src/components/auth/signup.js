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
      isAdmin: "",
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({ loading: true });
    const { Username, Password, FirstName, isAdmin } = this.state;
    console.log(Username, Password, FirstName, isAdmin);
    this.props.signup(Username, Password, FirstName, isAdmin);
  }
  changeHandler = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    this.setState({ success: nextProps.loginsuccess.Message});

  }

  render() {
    const { success, loading, error } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h4 className="text-center heading">Sign up to have an account</h4>
            <form onSubmit={this.handleSubmit}>
              <TextInputField
                name="Username"
                placeholder="username"
                type="text"
                classname="form-control form-control-lg"
                icon="fas fa-user"
                changed = {this.changeHandler}
              />
               <TextInputField
                name="FirstName"
                placeholder="firstname"
                type="text"
                classname="form-control form-control-lg"
                icon="fas fa-user"
                changed = {this.changeHandler}
              />  
              <TextInputField
                name="Password"
                placeholder="password"
                type="password"
                classname="form-control form-control-lg"
                icon="fas fa-unlock-alt"
                changed = {this.changeHandler}
              />  
            <select className="custom-select" onChange={this.changeHandler} name="isAdmin">
                <option>isAdmin</option>
                <option value="True">True</option>
                <option value="False">False</option>
            </select>
            <button type="submit" className="btn btn-block mt-4 btn-submit" >
                {loading ? <i className="fas fa-circle-notch spin spinner-border spinner-border-sm"/> : "Sign Up"}
              </button>
            </form><br/>
            <div>
           { 
              success && (  
              (success === "New account created") ?
              <div className="alert alert-success">{success}</div> : 
              <div className="alert alert-warning">{success}</div>
             )
            }

            </div>
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
