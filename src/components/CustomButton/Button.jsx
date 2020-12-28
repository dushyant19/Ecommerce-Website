import React from 'react'
import './button.scss'

function Button({GoogleSignIn,children,...otherprops}) {
    return (
        <button className={`custom-button ${GoogleSignIn?'google-sign-in':''}`} {...otherprops}>
            {children}
        </button>
    )
}

export default Button
