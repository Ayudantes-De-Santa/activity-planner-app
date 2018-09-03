import React from 'react'
import { connect } from 'react-redux'
import { fetchActivities, login } from '../../actions/activity'
import ActivityInfo from '../activity-info/activity-info'

class ActivityList extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log("component did mount")
        this.props.fetchActivities()
    }

    render() {
        return (
            <div>
                <h1>Activities</h1>
                <ul >
                    {this.props.activities.map(function (activityInfo) {
                        return (<ActivityInfo/>)
                    })}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    activities: state.activities
})
ActivityList = connect(
    mapStateToProps,
    {
        fetchActivities
    }
)(ActivityList)


export default ActivityList