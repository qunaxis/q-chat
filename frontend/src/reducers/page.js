import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL
} from '../constants/Page'

const initialState = {
  projects: [],
  fetching: false,
  error: ''
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { ...state, fetching: true, error: '' }

    case GET_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload, fetching: false, error: '' }

    case GET_PROJECTS_FAIL:
      return { ...state, error: action.payload.message, fetching: false }

    default:
      return state;
  }

}
