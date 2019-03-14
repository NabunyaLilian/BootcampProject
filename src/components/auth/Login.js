import React, { Component } from "react";
import { connect } from "react-redux";
import TextInputField from "../common/TextInputField";
import { login } from "./actions/login";
import PropTypes from "prop-types";
import './style/style.css'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      loading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    const { Username, Password } = this.state;
    this.props.login(Username, Password);
  }
  changedHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    if (nextProps.loginerror.data) {
      this.setState({ errors: "Wrong email or password" });
    }
  }

  render() {
    const { errors, loading } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <h2 className="text-center heading">Welcome to Store Manager</h2>
            {errors ? <div className="alert alert-danger">{errors}</div> : ""}
            <form onSubmit={this.onSubmit} id="loginForm">
              <TextInputField
                name="Username"
                placeholder="username"
                type="text"
                classname="form-control form-control-lg"
                icon="fas fa-user"
                changed={this.changedHandler}
              />

              <TextInputField
                name="Password"
                placeholder="Password"
                type="password"
                classname="form-control form-control-lg"
                icon="fas fa-unlock-alt"
                changed={this.changedHandler}
              />
              <button type="submit" className="btn btn-block mt-4 btn-submit" >
                {loading ? <i className="fas fa-circle-notch spin spinner-border spinner-border-sm"/> : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loginsuccess: state.loginReducer.user,
  loginerror: state.loginReducer.error
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
