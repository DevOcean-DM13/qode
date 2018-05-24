import axios from "axios";

const initialState = {
  user: {},
  loading: false,
  background: "",
  purpose: ""
};

const REGISTER_USER = "REGISTER_USER";
const GET_USER = "GET_USER";
const LOGOUT_USER = "LOGOUT_USER";
const UPDATE_BACKGROUND = "UPDATE_BACKGROUND";
const UPDATE_PURPOSE = "UPDATE_PURPOSE";

export function registerUser(
  userName,
  email,
  password,
  coding_background,
  purpose
) {
  return {
    type: REGISTER_USER,
    payload: axios
      .post(`/api/auth/register`, {
        userName,
        email,
        password,
        coding_background,
        purpose
      })
      .then(user => {
        console.log(user.data);
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

export function updateBackground(background) {
  return {
    type: UPDATE_BACKGROUND,
    payload: background
  };
}

export function updatePurpose(purpose) {
  return {
    type: UPDATE_PURPOSE,
    payload: purpose
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
      return { ...state, loading: false, user: action.payload };
    case `${UPDATE_BACKGROUND}`:
      return { ...state, background: action.payload };
    case `${UPDATE_PURPOSE}`:
      return { ...state, purpose: action.payload };
    default:
      return { state };
  }
}
