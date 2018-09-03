import React from 'react'
import { connect } from 'react-redux'
import { fetchActivities, login } from '../../actions/activity'

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
                        return (<li key={activityInfo.id}>{activityInfo.name}</li>)
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