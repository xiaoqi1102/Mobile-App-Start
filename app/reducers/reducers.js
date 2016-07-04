/**
 * Created by yzsoft on 16/6/28.
 */
import {combineReducers} from 'redux';
import {system} from './system'
import { routerReducer  } from 'react-router-redux';
let  reducer=combineReducers({
    system,
    routing: routerReducer
});

export default reducer;