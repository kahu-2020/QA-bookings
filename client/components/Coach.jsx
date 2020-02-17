import React from 'react'

const Coach = (props) => {
    console.log(props)
    return (
        <h3>{props.coach.first_name} {props.coach.last_name}</h3>
    )
}

export default Coach