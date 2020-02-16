import React from 'react'
import { connect } from 'react-redux'
import { returnCoach } from '../api/coachAPI'

class CoachList extends React.Component {

    constructor(props){
        super(props)

    }

    componentDidMount() {
        this.props.dispatch(returnCoach())
    }

    render() {

        console.log(this.props)

        return (
            <div className='centerCoach'>
                <button className='coach'>
                    <h3>COACH NAME</h3>
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        payload: state.coach
    }
}

export default connect(mapStateToProps)(CoachList)