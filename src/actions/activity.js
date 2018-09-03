import {
    isoFetch,
    postWithJSONBody,
    deleteRequest,
    putRequestWithJSONBody
  } from './fetch-utils'


export const login = (name) => (
    {
        type: "LOGIN",
        name
    }
)

export const createActivityView = () => ({
    type: "CREATE_ACTIVITY_VIEW"
})

export const subscribeParticipantsToActivity = (activity, participant) => async dispatch => {

  if(activity.participants === undefined || activity.participants === null) {
    activity.participants = [];
  }
  activity.participants.push(participant)
  try {
    const response = await isoFetch('/activity/'+activity.id+'/updateparticipants', putRequestWithJSONBody(activity.participants))
    const r = await response.json()
    if(response.status===200){
      dispatch(fetchActivities())
    }
    else{
      console.log("Error!! ", response.status)
    }
  } catch (err) {
    console.log("Error!! ", err)
  }
}

export const unsubscribeParticipantsToActivity = (activity, participant) => async dispatch => {

  // remove the participant
  var index = activity.participants.indexOf(participant);
  if (index > -1) {
    activity.participants.splice(index, 1);
  }

  try {
    const response = await isoFetch('/activity/'+activity.id+'/updateparticipants', putRequestWithJSONBody(activity.participants))
    const r = await response.json()
    if(response.status===200){
      dispatch(fetchActivities())
    }
    else{
      console.log("Error!! ", response.status)
    }
  } catch (err) {
    console.log("Error!! ", err)
  }
}

export const createActivity = (activity) => async dispatch => {
    try {
       const response = await isoFetch('/activity/create', postWithJSONBody(activity))
      if(response.status===200){
        dispatch(fetchActivities())
      }
      else{
        console.log("Error!! ", response.status)
      }
    } catch (err) {
      console.log("Error!! ", err)
    }
}

export const fetchActivities = () => async dispatch => {
    console.log("fetching activities")
    try {
      const response = await isoFetch('/activity/get')
      const json = await response.json()
      dispatch(loadActivities(json))
    } catch (err) {
      console.log("Error!! ", err)
    }
  }

export const loadActivities = activities => ({ type: "LOAD_ACTIVITIES", activities })
export const activityView = activity => ({ type: "ACTIVITY_VIEW", activity })