import React from 'react'
import { connect } from 'react-redux'
import { returnCoach } from '../api/coachAPI'

class CoachList extends React.Component {

    componentDidMount() {
        this.props.dispatch(returnCoach())
    }

    render() {
        return (
            <div className='centerCoach'>
                <button className='coach'>
                    <h3>COACH NAME}</h3>
                    {/* <h3>{this.props.coach.map( coach => {
                        return coach.first_name
                    })}</h3> */}
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        coach: state.coach
    }
}

export default connect(mapStateToProps)(CoachList)