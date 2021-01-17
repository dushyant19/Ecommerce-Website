import React from 'react'
import './CollectionItem.scss'
import Button from '../CustomButton/Button'
import {AddToCartAction} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
import {SetDropdownAction} from '../../redux/cart/cart.actions'

function CollectionItem({item,AddToCart}) {
    const {title,price,imageUrl} = item
    const url = imageUrl
    return (
        <div className="collection-item">
            <div style={{backgroundImage:`url(${url})`}} className="image">
            
            </div>
            <div className="footer">
                <span className="name">{title}</span>
            <   span className="price">${price}</span>
            </div>
            <Button inverse className='custom-button' onClick = {()=>{AddToCart(item);SetDropdownAction()}}>Add to Cart</Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        AddToCart : (item)=>dispatch(AddToCartAction(item)),
        display:()=>dispatch(SetDropdownAction())
    }
}

export default connect(null,mapDispatchToProps)(CollectionItem)
