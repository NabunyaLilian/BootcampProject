import axios from "axios";
import actionTypes from "./actionTypes";

const host = process.env.HOST;
const token = window.localStorage.getItem('auth_token');

export const signupsuccess = message => (
    {
        type: actionTypes.SIGNUPSUCCESS,
        payload: message
    }
)

export const signupfail = error => (
  {
      type: actionTypes.SIGNUPFAIL,
      payload: error
  }
)

export const signup = ( Username, Password,FirstName, isAdmin) => (dispatch) => {
  const url = `${host}/auth/signup`;
  const user = {
      Username,
      Password,
      FirstName,
      isAdmin
  };
  const requestData = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(user),
  };
  return axios(url, requestData)
    .then((response) => {
      dispatch(signupsuccess(response.data));
    })
    .catch(error => dispatch(signupfail(error.response.data.error)));
};
