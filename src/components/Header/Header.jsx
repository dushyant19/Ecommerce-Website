import React from 'react'
import './headers.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

import {Link,BrowserRouter,Router,Switch} from 'react-router-dom'
import Button from '../CustomButton/Button'
import firebase from 'firebase/app'

const logout = async ()=>{
    try{
        await firebase.auth().signOut()
        console.log('sign out successful')
    }
    catch(err){
        console.log('error while signing out')
    }
}

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
                    user?(<React.Fragment><div className="option">{user.displayName?user.displayName.trim().split(" ")[0]:'Unknown'}</div><div className="option" onClick={logout} >Sign out</div></React.Fragment>):(<Link className="option" to = '/accounts'>Sign In</Link>)
                }
            </div>
            </div>
    )
}

export default Header
