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
  goals,
  pic
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
        goals,
        pic
      })
      .then(user => {
        return user.data;
      })
      .catch(console.log)
  };
}

export function login(userName, password) {
  return {
    type: GET_USER,
    payload: axios
      .post(`/api/auth/login`, { userName, password })
      .then(user => {
        return user.data;
      })
      .catch(err => console.log(err))
  };
}

export function logout() {
  return {
    type: LOGOUT_USER,
    payload: axios
      .get(`/api/auth/logout`)
      .then(user => {
        //i dont know who put this .then here because we are not even using it. lol
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
        return user.data;
      })
      .catch(err => {
        console.trace(err);
        console.log(err);
      })
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
  switch (action.type) {
    case `${REGISTER_USER}_PENDING`:
      return { ...state, loading: true };
    case `${GET_USER}_FULFILLED`:
    case `${GET_USER_OBJ}_FULFILLED`:
      return { ...state, user: action.payload };
    case `${REGISTER_USER}_FULFILLED`:
      return { ...state, loading: false, user: action.payload };
    case `${UPDATE_BACKGROUND}`:
      return { ...state, coding_background: action.payload };
    case `${UPDATE_PURPOSE}`:
      return { ...state, purpose: action.payload };
    default:
      return state;
  }
}
