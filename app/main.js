/**
 * Created by yzsoft on 16/6/28.
 */
import "babel-polyfill";
import React from 'react';
import {render} from 'react-dom'

import {store} from './store'
import {Provider} from 'react-redux';
import {Router,browserHistory,hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import Routers from './router'
import './components/common/styles/app.less'
//import 'material-design-icons/www/css/material.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
let rootDocument = document.getElementById('container');
const history = syncHistoryWithStore (browserHistory, store);
history.listen(location => console.log(location.pathname));
render(
    <Provider store={store}>
        <Router history={history}>
            {Routers}
        </Router>
    </Provider>, rootDocument);