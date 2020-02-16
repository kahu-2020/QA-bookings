
import { GOT_COACH } from '../actions/index'

const initialState = []

function coachReducer (state = initialState, action) {
    switch(action.type) {
        case GOT_COACH:
            return action.coachObj
        default:
            return state
    }
}

export default coachReducer