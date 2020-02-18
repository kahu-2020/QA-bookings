import React from 'react'
import moment from 'moment'

class Month extends React.Component{

    state = {
        day: '',
        timeSlot: 0
    }

    render() {
        
        const time = moment().format('MMMM YYYY').toString().toUpperCase()

        return (
            <div>
                <h3>{time}</h3>
            </div>
        )
    }
}

export default Month