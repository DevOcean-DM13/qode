import axios from "axios";

const initialState = {
  user: {},
  loading: false
};

const REGISTER_USER = "REGISTER_USER";
const GET_USER = "GET_USER";
const LOGOUT_USER = "LOGOUT_USER";

export function registerUser(
  username,
  email,
  password,
  coding_background,
  purpose
) {
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

export function login(userName, password) {
  return {
    type: GET_USER,
    payload: axios
      .post(`/api/auth/login`, { userName, password })
      .then(user => {
        console.log(user.data);
        return user.data;
      })
      .catch(err => console.log(err))
  };
}

export default function userReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case `${REGISTER_USER}_PENDING`:
      return { ...state, loading: true };
    case `${GET_USER}_FULFILLED`:
      console.log(`HEREHEREHERE`, action.payload);
      return { ...state, user: action.payload };

    case `${REGISTER_USER}_FULFILLED`:
      // console.log(`this item stored`, action.payload);
      return { ...state, loading: false, user: action.payload };
    default:
      return { state };
  }
}
