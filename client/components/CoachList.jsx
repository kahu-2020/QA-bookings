import React from 'react'
import { connect } from 'react-redux'
import { returnCoach } from '../api/coachAPI'

class CoachList extends React.Component {

    componentDidMount() {
        this.props.dispatch(returnCoach())
        console.log('2')
        console.log(this.props)
    }

    render() {

        console.log('1')
        console.log(this.props)

        return (
            <div className='centerCoach'>
                <button className='coach'>
                    <h3>COACH NAME</h3>
                    <h3>{this.props.coachArr.map( coach => {
                        return <li>{coach}</li>
                    })}</h3>
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        coachObj: state.coach
    }
}

export default connect(mapStateToProps)(CoachList)