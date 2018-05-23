import axios from "axios";

const initialState = {
  user: {},
  loading: false
};

const REGISTER_USER = "REGISTER_USER";
const GET_USER = "GET_USER";
const LOGOUT_USER = "LOGOUT_USER";

export function registerUser(username, email, password) {
  return {
    type: REGISTER_USER,
    payload: axios
      .post(`url here`, {})
      .then(user => {
        console.log(user);
        return user.data;
      })
      .catch(err => console.log(err))
  };
}

export function login(username, email, password) {
  return {
    type: GET_USER,
    payload: axios
      .post(`url?username=${username}&email=${email}&password=${password}`)
      .then(user => {
        console.log(user);
        return user.data;
      })
      .catch(err => console.log(err))
  };
}

export default function userReducer(state = initialState, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case `${REGISTER_USER}_PENDING`:
      return { ...state, loading: true };
    case `${REGISTER_USER}_FULFILLED`:
      return { ...state, loading: false, user: action.payload.data };
    default:
      return { state };
  }
}
