import React from 'react'
import './button.scss'

function Button({handleClick,GoogleSignIn,children,inverse,...otherprops}) {
    return (
        <button onClick={handleClick} className={`custom-button ${inverse?'inverse':''} ${GoogleSignIn?'google-sign-in':''}`} {...otherprops}>
            {children}
        </button>
    )
}

export default Button
