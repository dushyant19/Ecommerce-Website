import {createSelector} from 'reselect'

const selectCart = (state)=>state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems 
)

export const selectCartDropdownHidden = createSelector(
    [selectCart],
    (cart)=>cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((prev,curr)=>prev+curr.count,0)
)

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((prev,curr)=>prev+curr.count*curr.price,0)
)