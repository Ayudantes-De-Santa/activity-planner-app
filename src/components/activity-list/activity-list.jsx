import React from 'react'
import { connect } from 'react-redux'
import { fetchActivities, createActivityView } from '../../actions/activity'
import ActivityInfo from '../activity-info/activity-info'
import '../../styles/activity-info.css';


class ActivityList extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchActivities()
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-success" onClick={() => this.props.createActivityView()}>Nueva actividad</button>
                <ul className="event-list">
                    {this.props.activities.map(function (activityInfo) {
                        return (<ActivityInfo key={activityInfo.id} activity={activityInfo}/>)
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
        fetchActivities,
        createActivityView
    }
)(ActivityList)


export default ActivityList