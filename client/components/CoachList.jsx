import React from 'react'
import { connect } from 'react-redux'
import { returnCoach } from '../api/coachAPI'
import Coach from './Coach'

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
<<<<<<< HEAD
                    <h3>COACH NAME</h3>
||||||| merged common ancestors
                    <h3>COACH NAME</h3>
                    {/* <h3>{this.props.coach.map( coach => {
                        return coach.first_name
                    })}</h3> */}
=======
                    <h3>{this.props.coach.map((coach) => {
                        return <ul key={coach.id}><Coach coach={coach} /></ul>
                    })}</h3>
>>>>>>> master
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