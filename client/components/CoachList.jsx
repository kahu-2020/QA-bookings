import React from 'react'
import { connect } from 'react-redux'
import { returnCoach } from '../api/coachAPI'
import Coach from './Coach'

class CoachList extends React.Component {

    componentDidMount() {
        this.props.dispatch(returnCoach())
    }

    render() {
        return (
            <div className='centerCoach'>
                <button className='coach'>
                    <h3>{this.props.coach.map((coach) => {
                        return <ul key={coach.id}><Coach coach={coach} /></ul>
                    })}</h3>
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