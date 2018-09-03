let initialState = {
    activities: [],
    activePage: 'login'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_ACTIVITIES':
            return {
                ...state,
                activePage: "activityList",
                activities: action.activities
            }
        case 'LOGIN':
            return { 
                ...state,
                activePage: "activityList",
                name: action.name
            }
        case 'ACTIVITY_VIEW':
            return {
                ...state,
                activePage: "activityView",
                activityView: action.activity
            }
        case 'CREATE_ACTIVITY_VIEW':
            return {
                ...state,
                activePage: "createActivityView"
            }
        default:
            return state;
        }
    };
      
    export default reducer;