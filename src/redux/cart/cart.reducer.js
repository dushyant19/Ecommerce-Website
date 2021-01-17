import CartActionTypes from './cart.types'
import {AddToCart,DecreaseCount} from './cart.utilities' 

const initial_state = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state=initial_state,action)=>{
    switch (action.type) {
        case CartActionTypes.SET_DROPDOWN:
            return {
                ...state,
                hidden:!(state.hidden)
            }
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems:AddToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.DECREASE_COUNT:
            return {
                ...state,
                cartItems:DecreaseCount(state.cartItems,action.payload)
            }
        case CartActionTypes.INCEREASE_COUNT:
            return {
                ...state,
                cartItems:AddToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter(item=>item.id!==action.payload.id)
            }
        default:
            return state
    }
}

export default cartReducer