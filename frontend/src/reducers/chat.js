import {
  SOCKET_CONNECT_REQUEST,
  SOCKET_CONNECT_SUCCESS,
  SOCKET_CONNECT_FAIL
} from '../constants/Chat'

const initialState = {
  messages: [],
  fetching: false,
  error: ''
}

export default function chat(state = initialState, action) {

  switch (action.type) {
    case SOCKET_CONNECT_REQUEST:
      return { ...state, fetching: true, error: '' }

    case SOCKET_CONNECT_SUCCESS:
      // return { ...state, messages: action.payload, fetching: false, error: '' }
      return { ...state, fetching: false, error: '' }
    case SOCKET_CONNECT_FAIL:
      return { ...state, fetching: false, error: action.payload.message }

    default:
      return state;
  }

}
