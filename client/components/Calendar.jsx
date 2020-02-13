import React from 'react'

class Calendar extends React.Component{

    state = {
        day: '',
        time: ''
    }

    render() {
        return (
            <div className='calendar'>
                <h1>COACH'S CALENDAR</h1>
            </div>
        )
    }
}

export default Calendar