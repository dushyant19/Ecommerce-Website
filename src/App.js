import React, { lazy } from 'react'
import { Switch } from 'react-router-dom'
import './App.css'
import Grid from './components/Grid/Grid'
import Hats from './components/Hats/Hats'
import Shop from './Pages/ShopPage/ShopPage'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Auth from './Pages/AuthPage/Auth'
import firebase from 'firebase/app'
import {adduser} from './firebase/config'
import {getuser} from './firebase/config'
import LazyLoad from 'react-lazyload'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentuser:null,
    }
}

unsubscribe = null

componentDidMount(){
  this.unsubscribe = firebase.auth().onAuthStateChanged(async (user)=> {
    if(user){
      const useref = await adduser(user)
      useref.onSnapshot(async (snapshot)=>{
      await this.setState({
        currentuser:{
          id:snapshot.id,
          ...snapshot.data()
        }
      })
    })
    console.log(this.state)
    }
    else{
      this.setState({
        currentuser:null
      })
    }
  });
}

componentWillUnmount(){
  this.unsubscribe()
}

render() {
  console.log("state is ",this.state)
    return (
      <div className="App">
        <BrowserRouter>
          <Header user = {this.state.currentuser}/>
            <Switch>
              <Route key={window.location.pathname} exact path="/"  >
                <LazyLoad height={100} offset={1000000} once>
                <Grid/>
                </LazyLoad>
                </Route>
              <Route key={window.location.pathname} exact path="/shop/hats">
                <LazyLoad height={200} offset={100} once>
                <Hats/>
                </LazyLoad>
              </Route>
              <Route key={window.location.pathname} exact path = '/shop'>
                <LazyLoad height={200} offset={100} once>
                  <Shop/>
                </LazyLoad>
              </Route>
              <Route key={window.location.pathname} exact path = "/accounts">
                <LazyLoad height={200} offset={100} once>
                {this.state.currentuser?<Redirect to="/"/>:<Auth/>}
                </LazyLoad>
              </Route>
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
  
}

export default App
