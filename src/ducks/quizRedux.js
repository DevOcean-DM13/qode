import axios from "axios";

const GET_QUIZ = "GET_QUIZ";

const initialState = {
  loading: true,
  quiz: []
};

export function getQuiz(quiz_id) {
  return {
    type: GET_QUIZ,
    payload: axios.get(`/api/content/get_quiz/${quiz_id}`).then(quiz => {
      return quiz;
    })
  };
}

export default function quizRedux(state = initialState, action) {
  switch (action.type) {
    case `${GET_QUIZ}_FULFILLED`:
      return Object.assign({}, state, {
        quiz: action.payload.data,
        loading: false
      });
    case `${GET_QUIZ}_PENDING`:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
}
