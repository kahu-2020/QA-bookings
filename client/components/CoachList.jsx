import React from 'react'
import { connect } from 'react-redux'
import { returnCoach } from '../actions/index'


class CoachList extends React.Component {

    componentDidMount() {
        this.props.dispatch(returnCoach())
    }

    render() {

        const coaches = this.props.coach[0]

        console.log(coaches)

        return (
            <div className='container'>
                {this.props.coach.map((coach, id) => {
                    return  <div className='centerCoach'>
                                {coach.map(coach => {
                                    return  <button className='coach'>
                                                <h3>{coach.first_name} {coach.last_name}</h3>
                                            </button>
                                                     
                                })}          
                            </div>
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