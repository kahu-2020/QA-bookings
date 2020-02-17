
import request from 'superagent'

import { receivedCoach, getCoaches, receiveCoachErr} from '../actions/index'

export function returnCoach() {
<<<<<<< HEAD
  return (dispatch) => {
    dispatch(getCoaches())
    return request
      .get('/api/v1/')
      .then(res =>
        res.body)
      .then(coachArr => {
        dispatch(receivedCoach(coachArr))
        console.log(coachArr)
      })
      .catch(err => {
        dispatch(receiveCoachErr(err))
      })
  }
}
||||||| merged common ancestors
    return (dispatch) => {
      request.get('/api/v1/')// check this route
        .then(res => res.body)
        .then(coachArr => {
          dispatch(getCoach(coachArr))
          console.log(coachArr)
        })
    }
  }
=======
    return (dispatch) => {
      request.get('/api/v1/')// check this route
        .then(res => res.body)
        .then(coachArr => {
          dispatch(getCoach(coachArr))
        })
    }
  }
>>>>>>> master
