/**
 * Created by yzsoft on 16/6/28.
 */
import React from 'react'

class App extends React.Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}
export  default App;