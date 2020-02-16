
export const GOT_COACH = 'GOT_COACH'
export const ERROR_COACH = 'ERROR_COACH'
export const GET_COACHES = 'GET_COACHES'

export const getCoaches = () => {
    return {
        type: GET_COACHES 
    }
}

export const receivedCoach = (coach) => {
    return {
        type: GOT_COACH,
        payload: coach
    }
}

export const receiveCoachErr = () => {
    return {
        type: ERROR_COACH,
        payload: error
    }
}

