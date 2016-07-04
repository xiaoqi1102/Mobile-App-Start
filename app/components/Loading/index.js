/**
 * Created by yzsoft on 16/6/30.
 */

import React, { Component, PropTypes } from 'react';
import './Loading.less';
import mixClass from '../common/utils/mix-class';

class Loading extends Component{
    render(){
        let {className,...other}=this.props;
        const classes = mixClass({
            'loading': true,
            '$': className
        });

        return(
            <div {...other} className={classes} >
                <div className="loading-dot" />
                <div className="loading-dot" />
                <div className="loading-dot" />
                <div className="loading-dot" />
                <div className="loading-dot" />
                <div className="loading-dot" />
                <div className="loading-dot" />
                <div className="loading-dot" />
            </div>
        )
    }
};
export default Loading;
Loading.propTypes = {
    className: PropTypes.string
};
