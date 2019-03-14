import axios from "axios";
import actionTypes from "./actionTypes";

const host = process.env.HOST;
const token = window.localStorage.getItem('auth_token');

export const fetchProductSuccess = message => (
    {
        type: actionTypes.FETCHPRODUCTSUCCESS,
        payload: message
    }
)

export const fetchProductError = error => (
  {
      type: actionTypes.FETCHPRODUCTERROR,
      payload: error
  }
)

export const fetchProduct = () => (dispatch) => {
  const url = `${host}/products`;
  const requestData = {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return axios(url, requestData)
    .then((response) => {
      dispatch(fetchProductSuccess(response.data.Products));
    })
    .catch(error => dispatch(fetchProductError(error.response.data.error)));
};
