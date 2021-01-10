import React, { Component } from 'react'
import {adduser} from '../../firebase/config'
import FormInput from '../FormInput/FormInput'
import Button from '../CustomButton/Button'
import './Signup.scss'
import firebase from 'firebase'

export class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
        }
    }
    handlechange = async (e)=>{
        const {name,value} = e.target;
        const prevState = this.state
        await this.setState({[name]:value})
    }
    handlesubmit = async (e)=>{
        e.preventDefault()
        console.log(e)
        const {displayName,email,password} = this.state
        const {user} = await firebase.auth().createUserWithEmailAndPassword(email,password)
        await adduser(user,displayName)
        this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''  
        })
    }
    render() {
        const {displayName,email,password,confirmpassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I already have an account</h2>
                <span>Sign up with email and password</span>
                <form action="" className="sign-up-form">
                    <FormInput label='Name' type='text' name='displayName' value={displayName} handleChange={this.handlechange} required/>
                    <FormInput label='Email' type='email' name='email' value={email} handleChange={this.handlechange} required/>
                    <FormInput label='Password' type='password' name='password' value={password} handleChange={this.handlechange} required/>
                    <FormInput label='Confirm Password' type='password' name='confirmpassword' value={confirmpassword} handleChange={this.handlechange} required/>
                    <Button handleClick = {this.handlesubmit}>
                        Sign Up
                    </Button>
                </form>
            </div>
        )
    }
}

export default Signup
