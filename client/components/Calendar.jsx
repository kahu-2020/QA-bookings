import React from 'react'
import Month from './Month'

class Calendar extends React.Component{

    state = {
        year: 0,
        month: '',
        day: 0,
        hour: 0,
    }

    render() {
        return (
            <div className='calendar'>
                <h1>COACH CALENDAR</h1>
                <Month />
            </div>
        )
    }
}

export default Calendar