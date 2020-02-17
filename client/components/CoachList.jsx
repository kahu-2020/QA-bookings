import React from 'react'
import { connect } from 'react-redux'
import { returnCoach } from '../actions/index'


class CoachList extends React.Component {

    componentDidMount() {
        this.props.dispatch(returnCoach())
    }

    render() {

        return (
            <div className='centerCoach'>
                {this.props.coach.map((coach, id) => {
                    return  <>
                                {coach.map(coach => {
                                    return  <button className='coach' key={id}>
                                                <h3>{coach.first_name} {coach.last_name}</h3>
                                            </button>          
                                })}          
                            </>
                })}
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