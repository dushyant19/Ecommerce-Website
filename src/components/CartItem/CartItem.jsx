import React from 'react'
import './CartItem.scss'

function CartItem({item:{imageUrl,name,price,count}}) {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt="item"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{count}x${price}</span>
            </div>
        </div>
    )
}

export default CartItem
