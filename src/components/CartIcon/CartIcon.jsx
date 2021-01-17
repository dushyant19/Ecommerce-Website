import React from 'react'
import './CartIcon.scss'
import {connect} from 'react-redux'
import {SetDropdownAction} from '../../redux/cart/cart.actions'

import {ReactComponent as ShoppingIcon} from '../../assets/carticon.svg'
import {selectCartItemsCount,selectCartDropdownHidden} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

function CartIcon({hidden,changeStatus,count}) {
    console.log('re rendered')
    return (
        <div className="cart-icon" onClick={changeStatus}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="count">{count}</span>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    hidden:selectCartDropdownHidden,
    count:selectCartItemsCount
})

const mapDispatchToProps = (dispatch)=>{
    return {
        changeStatus:()=>dispatch(SetDropdownAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
