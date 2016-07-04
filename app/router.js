/**
 * Created by yzsoft on 16/6/28.
 */
import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './app'
import Home from './containers/home'
import Hello from './containers/hello'
import Login from './containers/login'
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="hello" component={Hello}/>
        <Route path="login" component={Login}/>
    </Route>
)

