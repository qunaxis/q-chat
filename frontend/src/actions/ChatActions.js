import {
  SOCKET_CONNECT_REQUEST,
  SOCKET_CONNECT_SUCCESS,
  SOCKET_CONNECT_FAIL
} from '../constants/Chat'

/*eslint-disable */
import io from 'socket.io-client'
/*eslint-enable */

// dispatch({
//   type: GET_PROJECTS_SUCCESS,
//   payload: photos
// })
// dispatch({
//   type: GET_PROJECTS_FAIL,
//   error: true,
//   payload: new Error(e)
// })
// dispatch({
//   type: GET_PROJECTS_SUCCESS,
//   payload: photos
// })
export function connectToSocket() {
  return (dispatch) => {
    dispatch({
      type: SOCKET_CONNECT_REQUEST
    })
    // const socket = io('http://localhost:8080/', { path: '/chat' })
    // const uri = 'http://localhost:8080/'
    // let socket = io.connect(uri, { path: '/' })
    const socket = io('http://192.168.0.11:8080/', { path: '/chat/' })
    socket.on('connect', () => {
      dispatch({
        type: SOCKET_CONNECT_SUCCESS
      })
    })
    socket.on('connect_failed', err => {
      dispatch({
        type: SOCKET_CONNECT_FAIL,
        payload: err
      })
    })
    socket.on('error', err => {
      dispatch({
        type: SOCKET_CONNECT_FAIL,
        payload: err
      })
    })
  }
}
