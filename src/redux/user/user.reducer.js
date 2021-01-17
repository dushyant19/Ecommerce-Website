import ActionTypes from './user.types'

const initial_state = {
    currentuser:{
        currentuser:null
    }
}

const userReducer = (state=initial_state,action)=>{
    switch (action.type) {
        case ActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentuser:action.payload
            }
            break;

        default:
            return state;
    }
}

export default userReducer