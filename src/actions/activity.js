export const login = (name) => ({
    type: "LOGIN",
    name
})

export const loadActivities = activities => ({ type: "LOAD_ACTIVITIES", activities })