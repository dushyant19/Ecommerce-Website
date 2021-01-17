import React from 'react'
import './headers.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

import {Link,BrowserRouter,Router,Switch} from 'react-router-dom'
import Button from '../CustomButton/Button'
import firebase from 'firebase/app'
import {connect} from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'
import Dropdown from '../CartDropdown/Dropdown'
import {createStructuredSelector} from 'reselect'
import {selectCartDropdownHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'


const logout = async ()=>{
    try{
        await firebase.auth().signOut()
        console.log('sign out successful')
    }
    catch(err){
        console.log('error while signing out')
    }
}

function Header({currentuser,hidden}) {
    console.log('header render')
    console.log(currentuser)
    console.log(hidden)
    currentuser = currentuser.currentuser
    console.log(currentuser)
    return (
        
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo/>
            </Link>
            <div className="options">
                <Link className="option" to = '/shop'>Shop</Link>
                <Link className="option" to = '/contact'>Contact</Link>
                {
                    currentuser?(<React.Fragment><div className="option">{currentuser.displayName?currentuser.displayName.trim().split(" ")[0]:'Unknown'}</div><div className="option" onClick={logout} >Sign out</div></React.Fragment>):(<Link className="option" to = '/accounts'>Sign In</Link>)
                }
                <CartIcon/>
            </div>
            {hidden?<></>:<Dropdown/>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    hidden:selectCartDropdownHidden,
    currentuser:selectCurrentUser
})



export default connect(mapStateToProps)(Header)
