import React from 'react'
import Button from '../CustomButton/Button'
import './Dropdown.scss'
import {connect} from 'react-redux'
import CartItem from '../CartItem/CartItem'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {SetDropdownAction} from '../../redux/cart/cart.actions'


function Dropdown({cartItems,history,toggle}) {
    function checkoutAndToggle(){
        toggle()
        history.push('/checkout')
    }
    return (
        <div className="dropdown">
            <div className="cart-items">
            {
               cartItems.length?cartItems.map(item=>{
                    return (
                        <CartItem item={item}/>
                    )
                }):
                <span className='empty-message'>Your cart is empty</span>
            }
            </div>
            <Button onClick = {checkoutAndToggle} inverse type='button'>Go to Checkout</Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

const mapDispatchToProps = (dispatch)=>{
    return {
        toggle:()=>dispatch(SetDropdownAction())
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dropdown))
