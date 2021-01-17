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
import {connect} from 'react-redux'
import setCurrentUser from './redux/user/user.action'
import {SetDropdownAction} from './redux/cart/cart.actions'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'
import Checkout from './Pages/CheckoutPage/Checkout'

class App extends React.Component {
  
unsubscribe = null
componentDidMount(){
  const {setCurrentUser} = this.props
  this.unsubscribe = firebase.auth().onAuthStateChanged(async (user)=> {
    if(user){
      const useref = await adduser(user)
      useref.onSnapshot(async (snapshot)=>{
      setCurrentUser({
        currentuser:{
          id:snapshot.id,
          ...snapshot.data()
        }
      })
    })    
    }
    else{
      setCurrentUser({
        currentuser:null
      })
    }
  });
}

componentWillUnmount(){
  this.unsubscribe()
}

render() {
  console.log('In app')
  let currentuser = this.props.currentuser
  currentuser = currentuser.currentuser
  const toggle = this.props.toggle
  let hidden = this.props.hidden
  console.log(currentuser)
    return (
      <div className="App" >
        <BrowserRouter>
          <Header/>
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
              <Route exact path = '/checkout'>
                <Checkout/>
              </Route>
              <Route key={window.location.pathname} exact path = "/accounts">
                <LazyLoad height={200} offset={100} once>
                {currentuser?<Redirect to="/"/>:<Auth/>}
                </LazyLoad>
              </Route>
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentuser:selectCurrentUser
})

const mapDispatchToProps = (dispatch)=>{
   return {
     setCurrentUser:(user)=>dispatch(setCurrentUser(user)),
     toggle:()=>dispatch(SetDropdownAction())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
