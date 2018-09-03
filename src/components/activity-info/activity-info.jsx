import React from 'react'
import { connect } from 'react-redux'
import { sayHello } from '../../actions/activity'



let ActivityInfo = ({}) => (
    <div>
        <div><h2>"Hackaton 2018"</h2></div>
    </div>
)

const mapStateToProps = (state) => ({
  
})
const mapDispatchToProps = (dispatch) => ({
//   saySomething: () => { dispatch(sayHello())}
})
ActivityInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityInfo)


export default ActivityInfo;