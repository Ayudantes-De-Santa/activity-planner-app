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