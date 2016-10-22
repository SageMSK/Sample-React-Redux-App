import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, DE_AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signUpUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/about');
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export function signInUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/about');
      })
      .catch(err => {
        console.log(err);
      });
  }
}