import React, { Fragment, PureComponent } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import DisplayProduct from './DisplayProduct'
import Header from './Header'
const Routing =()=>{
return(
    <BrowserRouter>
     <Header/>
    <div>
        <Route exact path="/" component={Home}/>
        <Route  path="/product" component={DisplayProduct}/>
        <Route  path="/Profile" component={Profile}/>
    </div>
    </BrowserRouter>
    )
}
export default Routing;
