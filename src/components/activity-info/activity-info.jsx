import React from 'react'
import { connect } from 'react-redux'
// import { showDescription } from '../../actions/activity'
import '../../styles/activity-info.css';
import { activityView } from '../../actions/activity'
import { subscribeParticipantsToActivity } from '../../actions/activity'
import { unsubscribeParticipantsToActivity } from '../../actions/activity'

class ActivityInfo extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: "default"
        }
    }

    render() {
        let activity = this.props.activity
        return (
            <li >
                <time datetime="2014-07-20">
                    <span class="day">11</span>
                    <span class="month">1</span>
                    <span class="year">2018</span>
                    <span class="time">ALL DAY</span>
                </time>
                <img alt="Hackaton" src="https://www.gstatic.com/webp/gallery3/2.png" />
                <div class="info">
                    <h2 class="title">{activity.name}</h2>
                    <p class="desc">Description....</p>
                    <p class="place">Alberti 123, caba</p>
                    <span id="subscribe" onClick={()=>this.props.subscribeParticipantsToActivity(activity,"damian")}>Join</span>
                    <span id="unsubscribe" onClick={()=>this.props.unsubscribeParticipantsToActivity(activity,"damian")}>Cancel Subcription</span>
                    <span id="details"onClick={() => this.props.activityViewProp(activity)}>Details</span>
                </div>
            </li>
        )
    }

}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
    activityViewProp: (activity) => { dispatch(activityView(activity))},
    subscribeParticipantsToActivity: (activity, participant) => { dispatch(subscribeParticipantsToActivity(activity, participant))},
    unsubscribeParticipantsToActivity: (activity, participant) => { dispatch(unsubscribeParticipantsToActivity(activity, participant))}
})

ActivityInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityInfo)


export default ActivityInfo;