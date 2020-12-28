import React from 'react'
import './CollectionItem.scss'

function CollectionItem({title,url,price}) {
    return (
        <div className="collection-item">
        <div style={{backgroundImage:`url(${url})`}} className="image">
            
        </div>
        <div className="footer">
    <span className="name">{title}</span>
    <span className="price">${price}</span>
        </div>
        </div>
    )
}

export default CollectionItem
