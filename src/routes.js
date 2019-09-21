import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import BrowseLive from './Components/BrowseLive/BrowseLive';


export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/browse/live" component={BrowseLive} />
    </Switch>
)