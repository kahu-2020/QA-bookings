
import request from 'superagent'

import {getCoach} from '../actions/index'

export function returnCoach() {
    return (dispatch) => {
      request.get('/api/v1/')
        .then(res => 
          res.body)
        .then(coachArr => {
          dispatch(getCoach(coachArr))
          console.log(coachArr)
        })
    }
  }