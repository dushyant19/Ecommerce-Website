import ActionTypes from './user.types'

const setCurrentUser = (user)=>{
    return {
        type:ActionTypes.SET_CURRENT_USER,
        payload:user
    }
}

export default setCurrentUser