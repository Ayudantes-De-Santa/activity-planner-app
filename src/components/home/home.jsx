import React from 'react'
import { connect } from 'react-redux'
import ActivityList from '../activity-list/activity-list';
import ActivityView from '../activity-view/activity-view';
import Login from '../login/login'


let Home = ({activePage}) => {
    if(activePage === "login"){
        return (
            <Login/>
        )
    }
    if(activePage === "activityList"){
        return (
            <ActivityList/>
        )
    }
    if(activePage === "activityView"){
        return (
            <ActivityView/>
        )
    }
}


const mapStateToProps = (state) => ({
    activePage: state.activePage
})
const mapDispatchToProps = (dispatch) => ({
    
})
Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default Home