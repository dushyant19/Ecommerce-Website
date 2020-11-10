import React from 'react'
import './menu-item.scss'

function MenuItem({title,url,size}) {
    return (
        <div className={`menu-item ${size}`}>
            <div style={{backgroundImage: `url(${url})`}} class="background">

            </div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem
