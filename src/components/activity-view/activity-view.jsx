import React from 'react'
import { connect } from 'react-redux'
class ActivityView extends React.Component {

    render() {
        let activity = this.props.activity
        return (
            <div>
                <h1>{activity.name} {activity.date},{activity.time}</h1>
                <img alt="Hackaton" src={activity.photo} />
                <p>{activity.location}</p>
                <p>{activity.description}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    activity: state.activityView
})
const mapDispatchToProps = (dispatch) => ({
})
ActivityView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityView)


export default ActivityView