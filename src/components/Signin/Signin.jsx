import React, { Component } from 'react'
import FormInput from '../../components/FormInput/FormInput'
import './Signin.scss'
import CustomButton from '../../components/CustomButton/Button'

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
                    <CustomButton type="submit" name="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton GoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
