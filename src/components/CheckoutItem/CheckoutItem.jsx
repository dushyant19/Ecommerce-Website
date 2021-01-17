import React from 'react'
import './CheckoutItem.scss'
import {connect} from 'react-redux'
import {RemoveFromCart,IncreaseCount,DecreaseCount} from '../../redux/cart/cart.actions'

function CheckoutItem({item,removeItem,increaseQuantity,decreaseQuantity}) {
    const {name,imageUrl,count,price} = item
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt='image'/>
            </div>
            <span className='name'>{name}</span>
            
            <div  className='quantity'>
            <span onClick={()=>{decreaseQuantity(item)}} className='arrow-button left'>&#8249;</span>
                <span className='count'>{count}</span>
            <span onClick={()=>{increaseQuantity(item)}} className='arrow-button right'>&#8250;</span>
            </div>
            <span className='price'>{price}</span>
            <div onClick={()=>{removeItem(item)}} className='remove-button'>&#10005;</div>
        </div>
    )   
}

const mapDispatchToProps = (dispatch)=>{
    return {
        removeItem:(item)=>dispatch(RemoveFromCart(item)),
        increaseQuantity:(item)=>dispatch(IncreaseCount(item)),
        decreaseQuantity:(item)=>dispatch(DecreaseCount(item))
    }
}

export default connect(null,mapDispatchToProps)(CheckoutItem)
