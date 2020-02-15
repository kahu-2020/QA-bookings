
export const GOT_COACH = 'GOT_COACH'

export function getCoach (coach) {
    return {
        type: GOT_COACH,
        coach: coach
    }
}

