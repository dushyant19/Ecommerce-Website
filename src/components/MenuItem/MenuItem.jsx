import React from 'react'
import './menu-item.scss'
import {withRouter} from 'react-router-dom'

function MenuItem({title,url,size,link,history,match}) {
    return (
        <div className={`menu-item ${size}`} onClick={()=>history.push(`${match.url}${link}`)}>
            <div style={{backgroundImage: `url(${url})`}} className="background">
            </div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
