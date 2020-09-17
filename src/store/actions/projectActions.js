export const createProject = (project) => {
    return (dispatch, getState) => {
        // do some async job
        dispatch({ type: "CREATE_PROJECT", project })
    }
}