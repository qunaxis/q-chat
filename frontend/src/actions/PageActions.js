import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_SUCCESS
} from '../constants/Page'

// let projectsArr = []

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
export function getProjects() {
  return (dispatch) => {
    dispatch({
      type: GET_PROJECTS_REQUEST
    })
    fetch('//localhost:3001/portfolio/', {
        headers: {
          Accept: 'application/json'
        }
      })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_PROJECTS_SUCCESS,
          payload: res.projects
        })
      })
      .catch(err => {
        console.warn(err);
        dispatch({
          type: GET_PROJECTS_FAIL,
          payload: err
        })
      })
  }
}
