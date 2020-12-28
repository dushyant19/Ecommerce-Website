import React from 'react'
import { Switch } from 'react-router-dom'
import './App.css'
import Grid from './components/Grid/Grid'
import Hats from './components/Hats/Hats'
import Shop from './Pages/ShopPage/ShopPage'
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Auth from './Pages/AuthPage/Auth'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentuser:null,
    }
}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Header user = {this.state.currentuser}/>
            <Switch>
              <Route key={window.location.pathname} exact path="/"  >
                <Grid/>
                </Route>
              <Route key={window.location.pathname} exact path="/shop/hats">
                <Hats/>
              </Route>
              <Route key={window.location.pathname} exact path = '/shop'>
                <Shop/>
              </Route>
              <Route key={window.location.pathname} exact path = "/accounts">
                <Auth/>
              </Route>
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
  
}

export default App
