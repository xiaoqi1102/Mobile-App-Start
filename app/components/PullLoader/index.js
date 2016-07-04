/**
 * Created by yzsoft on 16/6/30.
 */
import React,{PropTypes,Component} from 'react'
import mixClass from '../common/utils/mix-class';
import Loading from './../Loading'
class PullLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            showLoading:false
        };
        this._watchScroll = this._watchScroll.bind(this);
    }

    componentDidMount() {
        console.log('pull did mount');
        window.addEventListener('scroll', this._watchScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._watchScroll, false);
    }
    _watchScroll() {
        //console.log(document.body.clientHeight,window.scrollY + window.innerHeight);
        let {showLoading}=this.state;
        if ((window.scrollY + window.innerHeight >= document.body.clientHeight)
            && (typeof this.props.onPull === 'function')) {
            this.props.onPull.call(this);
            this.setState({
                showLoading:true
            })
        }else {
            if(showLoading){
                showLoading=false;
                this.setState({
                    showLoading
                })
            }
        }
    }
    render() {
        let {loading,...other}=this.props;
        let {showLoading}=this.state;
        return (
            <div {...other} >
                {this.props.children}
                {loading&&showLoading?<Loading />:null}
            </div>
        )
    }
}
;

export  default PullLoader;

PullLoader.propTypes = {
    loading: PropTypes.bool,
    onPull: PropTypes.func
};

