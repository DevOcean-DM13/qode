import axios from "axios";

const initialState = {
  lesson: [],
  lastLesson: []
};

const GET_LESSON = "GET_LESSON";
const GET_LAST = "GET_LAST";

export function getLesson(lesson_id) {
  return {
    type: GET_LESSON,
    payload: axios
      .get(`/api/content/get_lesson/${lesson_id}`)
      .then(lesson => {
        // console.log(lesson);
        return lesson.data;
      })
      .catch(err => console.log(err))
  };
}

export function getLast(lesson_id) {
  return {
    type: GET_LAST,
    payload: axios
      .get(`/api/content/get_lesson/${lesson_id}`)
      .then(lesson => {
        return lesson.data;
      })
      .catch(err => console.log(err))
  };
}

export default function lessReducer(state = initialState, action) {
  // console.log("reducer state:", state);
  switch (action.type) {
    case `${GET_LESSON}_FULFILLED`:
      return Object.assign({}, state, { lesson: action.payload });
    case `${GET_LAST}_FULFILLED`:
      return Object.assign({}, state, { lastLesson: action.payload });
    default:
      return state;
  }
}
