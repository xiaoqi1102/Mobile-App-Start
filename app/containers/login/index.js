/**
 * Created by yzsoft on 16/6/29.
 */
import React from 'react'
import {Link} from 'react-router'
class Login extends React.Component{
    render(){
        return(
            <div>
                login
                <p>
                    <Link to="/hello">to hello</Link>
                </p>
            </div>
        )
    }
};

export  default Login;