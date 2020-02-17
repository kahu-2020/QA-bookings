
import { GOT_COACH, GET_COACHES, ERROR_COACH} from '../actions/index'

const initialState = []

function coachReducer (state = initialState, action) {
    switch(action.type) {
        case GET_COACHES:
            return state
        case GOT_COACH:
            return action.payload
        case ERROR_COACH:
            return action.payload
        default:
            return state
    }
}

export default coachReducer