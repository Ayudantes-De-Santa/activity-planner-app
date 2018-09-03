import React from 'react'
import ActivityInfo from '../activity-info/activity-info'
import { connect } from 'react-redux'

let ActivityList = ({ activityInfoList }) => (
    <div>
        <ul >
            {activityInfoList.map(function (activityInfo) {
                return (<li key={activityInfo.id}>{activityInfo.title}</li>)
            })}
        </ul>
    </div>
)

const mapStateToProps = (state) => ({
  activityInfoList: [
      {
          title: 'Hackaton 2018',
          id: 1
      },
      {
          title: 'Fiesta de fin de año',
          id: 2
      }
  ]
})
const mapDispatchToProps = (dispatch) => ({
//   saySomething: () => { dispatch(sayHello())}
})
ActivityList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityList)


export default ActivityList