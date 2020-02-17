
export const RECEIVED_COACH = 'RECEIVED_COACH'
export const ERROR = 'ERROR'
export const GET_COACH = 'GET_COACH'

import request from 'superagent'

export const getCoach = () => {
    return {
        type: GET_COACH
    }
}

export const receivedCoach = (coach) => {
    return {
        type: RECEIVED_COACH,
        coach: coach
    }
}

export const receiveErr = (error) => {
    return {
        type: ERROR,
        coach: error
    }
}

export function returnCoach() {
    return (dispatch) => {
      dispatch(getCoach())
      return request
        .get('/api/v1/')// check this route
        .then(res => res.body)
        .then(coachArr => {
          dispatch(receivedCoach(coachArr))
        })
        .catch(err => {
          dispatch(receiveErr(err))
        })
    }
  }

