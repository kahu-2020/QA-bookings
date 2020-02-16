
import request from 'superagent'

import { receivedCoach, getCoaches, receiveCoachErr} from '../actions/index'

export function returnCoach() {
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