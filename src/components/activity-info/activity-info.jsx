import React from 'react'
import { connect } from 'react-redux'
// import { showDescription } from '../../actions/activity'
import '../../styles/activity-info.css';
import { activityView } from '../../actions/activity'

class ActivityInfo extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: "default"
        }
    }

    render() {
        let activity = this.props.activity
        console.log(this.props.activity)
        let date = new Date(this.props.activity.date)

        return (
            <li onClick={() => this.props.activityViewProp(activity)}>
                <time datetime="2014-07-20">
                    <span className="day">{date.getDay()}</span> 
                    <span className="month">{date.getMonth()}</span>
                    <span className="year">{date.getFullYear()}</span>
                    <span className="time">{activity.time}</span>
                </time>
                <img alt="Hackaton" src="https://www.gstatic.com/webp/gallery3/2.png" />
                <div className="info">
                    <h2 className="title">{activity.name}</h2>
                    <p className="desc">{activity.description}</p>
                    <p className="place">{activity.location}</p>
                </div>
        
            </li>
        )
    }

}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
    activityViewProp: (activity) => { dispatch(activityView(activity))}
})

ActivityInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityInfo)


export default ActivityInfo;