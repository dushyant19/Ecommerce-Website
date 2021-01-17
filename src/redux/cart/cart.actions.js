import CartActionTypes from './cart.types'

export const SetDropdownAction = ()=>{
    return {
        type:CartActionTypes.SET_DROPDOWN
    }
}

export const AddToCartAction = (item)=>{
    return {
        type:CartActionTypes.ADD_TO_CART,
        payload:item
    }
}

export const RemoveFromCart = (item)=>{
    return {
        type:CartActionTypes.REMOVE_FROM_CART,
        payload:item
    }
}

export const IncreaseCount = (item)=>{
    return {
        type:CartActionTypes.INCEREASE_COUNT,
        payload:item
    }
}

export const DecreaseCount = (item)=>{
    return {
        type:CartActionTypes.DECREASE_COUNT,
        payload:item
    }
}