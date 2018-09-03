import React from 'react'
import { connect } from 'react-redux'
import '../../styles/activity-view.css';

class ActivityView extends React.Component {

    render() {
        let activity = this.props.activity
        return (
            <div className="content">
            <div className="logo">
                    <img alt="Hackaton" src={activity.photo}/>
            </div>
            <div className="data">
                <div>Activity name: <b>{activity.name}</b></div> 
                <div>Activity date: {activity.date},{activity.time}</div>        
                <div>
                   <div>Activity location: <img className="location" alt="Location" src="https://findicons.com/files/icons/2813/flat_jewels/256/location_pin.png" />
                    <span>{activity.location}</span></div>
                </div>
                <div>Description : {activity.description}</div>
                </div>
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