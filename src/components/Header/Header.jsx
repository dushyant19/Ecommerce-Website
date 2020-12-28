import React from 'react'
import './headers.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

import {Link,BrowserRouter,Router,Switch} from 'react-router-dom'
import { auth } from '../../firebaase/firebase.utils'
import Button from '../CustomButton/Button'

function Header({user}) {
    console.log(user)
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo/>
            </Link>
            <div className="options">
                <Link className="option" to = '/shop'>Shop</Link>
                <Link className="option" to = '/contact'>Contact</Link>
                {
                    user?(
                        <div className="option" onClick={()=>auth.signOut()}>
                            Sign Out
                        </div>
                    ):
                    (<Link className="option" to = '/accounts'>Sign in</Link>)
                }
            </div>
            </div>
    )
}

export default Header
