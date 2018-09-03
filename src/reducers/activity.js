let initialState = {
    activities: [],
    activePage: 'login'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_ACTIVITIES':
            return {
                ...state,
                activities: action.activities
            }
        case 'LOGIN':
            return { 
                ...state,
                activePage: "activityList",
                name: action.name
            }
        default:
            return state;
        }
    };
      
    export default reducer;