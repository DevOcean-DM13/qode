import axios from "axios";

const initialState = {
  lesson: []
};

const GET_LESSON = "GET_LESSON";

export function getLesson(lesson_id) {
  return {
    type: GET_LESSON,
    payload: axios
      .get(`/api/content/get_lesson/${lesson_id}`)
      .then(lesson => {
        console.log(lesson);
        return lesson.data;
      })
      .catch(err => console.log(err))
  };
}

export default function lessReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_LESSON}_FULFILLED`:
      return Object.assign({}, state, { lesson: action.payload });
    default:
      return state;
  }
}
