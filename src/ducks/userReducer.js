import axios from "axios";

const initialState = {
  user: {},
  loading: false,
  coding_background: "",
  purpose: ""
};

const REGISTER_USER = "REGISTER_USER";
const GET_USER = "GET_USER";
const GET_USER_OBJ = "GET_USER_OBJ";
const LOGOUT_USER = "LOGOUT_USER";
const UPDATE_BACKGROUND = "UPDATE_BACKGROUND";
const UPDATE_PURPOSE = "UPDATE_PURPOSE";

export function registerUser(
  userName,
  email,
  password,
  codingBackground,
  purpose,
  goals
) {
  return {
    type: REGISTER_USER,
    payload: axios
      .post(`/api/auth/signup`, {
        userName,
        email,
        password,
        codingBackground,
        purpose,
        goals
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
        console.log(user);
        return user.data;
      })
      .catch(err => console.log(err))
  };
}

export function logout() {
  return {
    type: LOGOUT_USER,
    payload: axios
      .post(`/api/auth/logout`)
      .then(user => {
        console.log(user);
      })
      .catch(err => console.log(err))
  };
}

export function getUser() {
  return {
    type: GET_USER_OBJ,
    payload: axios
      .get(`/api/auth/user`)
      .then(user => {
        console.log(user);
        return user.data;
      })
      .catch(err => err)
  };
}

export function updateBackground(coding_background) {
  return {
    type: UPDATE_BACKGROUND,
    payload: coding_background
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
    case `${GET_USER_OBJ}_FULFILLED`:
      console.log(`HEREHEREHERE`, action.payload);
      return { ...state, user: action.payload };
    case `${REGISTER_USER}_FULFILLED`:
      return { ...state, loading: false, user: action.payload };
    case `${UPDATE_BACKGROUND}`:
      return { ...state, coding_background: action.payload };
    case `${UPDATE_PURPOSE}`:
      return { ...state, purpose: action.payload };
    default:
      return { state };
  }
}
