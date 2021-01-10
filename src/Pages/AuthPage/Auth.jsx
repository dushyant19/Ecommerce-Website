import React from 'react'
import Signin from '../../components/Signin/Signin'
import Signup from '../../components/SignUp/Signup'
import './Auth.scss'

function Auth() {
    return (
        <div className="auth">
            <Signin/>
            <Signup/>
        </div>
    )
}

export default Auth
