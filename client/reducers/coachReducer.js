
import { RECEIVED_COACH, GET_COACH, ERROR } from '../actions/index'

const initialState = []

function coachReducer (state = initialState, action) {
    switch(action.type) {
        case GET_COACH:
            return state
        case RECEIVED_COACH:
            return [...state, action.coach]
        case ERROR:
            return action.coach
        default:
            return state
    }
}

export default coachReducer