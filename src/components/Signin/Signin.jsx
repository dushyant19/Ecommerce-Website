import React, { Component } from 'react'
import FormInput from '../../components/FormInput/FormInput'
import './Signin.scss'
import CustomButton from '../../components/CustomButton/Button'
import {googleSignIn} from '../../firebase/config'
import firebase from 'firebase'

export class Signin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        const {email,password} = this.state;
        try{
            const {user} = firebase.auth().signInWithEmailAndPassword(email,password);
        }
        catch(err){
            console.error(err.message)
        }
    }
    handleChange = (event)=>{
        const {value,name} = event.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="signin">
                <h1>I already have an account</h1>
                <span>Sign in to continue</span>
                <form onSubmit={this.handleSubmit} method="POST">
                    <FormInput label="email" handleChange={this.handleChange} type="email" name="email" value={this.state.email} required/>
                    <FormInput label="password" handleChange={this.handleChange} type="password" name="password" value={this.state.password} required/>
                    <div className="buttons">
                    <CustomButton handleClick={this.handleSubmit} type="submit" name="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton type="button" handleClick = {googleSignIn} GoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
