import React from 'react'
import './button.scss'

function Button({handleClick,GoogleSignIn,children,...otherprops}) {
    return (
        <button onClick={handleClick} className={`custom-button ${GoogleSignIn?'google-sign-in':''}`} {...otherprops}>
            {children}
        </button>
    )
}

export default Button
