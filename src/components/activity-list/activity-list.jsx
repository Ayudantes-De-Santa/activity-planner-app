import React from 'react'
import { connect } from 'react-redux'
import {
    isoFetch,
    postWithJSONBody,
    deleteRequest,
    putRequestWithJSONBody
  } from '../../actions/fetch-utils'
class ActivityList extends React.Component {

    componentDidMount(){
        fetch()
    }

    async fetch() {
        try {
        const response = await isoFetch('/5b8d36c03300005400c158ef')
        if (response.status !== 200) {
          console.log("Error loading activities!")
        } else {
          const json = await response.json()
          console.log("response from server: ", json)
          this.state.activities = json
        }
      } catch (err) {
        console.log("Error loading activities", err)
      }
    }
    
    render() {
        return (
            <div>
                <ul >
                    {this.state.activities.map(function (activityInfo) {
                        return (<li key={activityInfo.id}>{activityInfo.title}</li>)
                    })}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    activities: [
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