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
    activity:
        {
            "name":"Damian Activity",
            "location":"buenos aires",
            "date":"11/09/2018",
            "time":"11:00",
            "photo":"https://i.ytimg.com/vi/EDQwUOMYYes/hqdefault.jpg",
            "description":"que se yo amego... lo que de"
        }
})
const mapDispatchToProps = (dispatch) => ({
})
ActivityView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActivityView)


export default ActivityView