/**
 * Created by yzsoft on 16/6/28.
 */
import React from 'react'
import {handleSession,handleStorage} from './../../system/dataStore'
import PullLoader from './../../Components/PullLoader'
import Icon from './../../Components/Icon'
import Button from './../../Components/Button'
import TopAction from './../../Components/TopAction'
import Dropdown from './../../Components/Dropdown'
import ImageSlider from './../../Components/ImageSlider'
import PlusMinus from './../../Components/PlusMinus'
import ImgFirst from './../../static/img/400_600.jpeg';
import ImgSecond from './../../static/img/400_300.jpeg';
import ImgThird from './../../static/img/400_400.jpeg'
import {getData} from './../../system/apiHelper'
const imageSliderData = [
    ImgFirst,
    ImgSecond,
    ImgThird
];
import {
    lightGreen500,
    deepOrange200,
    blueGrey800,
    deepPurple700

} from './../../Components/styles/colors'
//import {PullLoader} from 'react-mobile-components'
let iconList = [
    'edit',
    'loading',
    'delete',
    'checked',
    'home',
    'gift',
    'user',
    'shop',
    'top',
    'arrow-down',
    'plus',
    'minus'
];
const dropDownData = {
    toggle: {
        name: 'exchangeable',
        text: '我能兑换'
    },
    filters: [
        {
            name: 'sort',
            text: '排序',
            depth: 1,
            list: [
                {
                    name: 'count',
                    text: '兑换量优先'
                },
                {
                    name: 'pointsAtoZ',
                    text: '积分低到高'
                }
            ]
        },
        {
            name: 'category',
            text: '分类',
            depth: 2,
            list: [
                {
                    name: 'all',
                    text: '全部'
                },
                {
                    name: 'physical',
                    text: '实物礼品'
                },
                {
                    name: 'virtual',
                    text: '虚拟礼品'
                },
                {
                    name: 'discount',
                    text: '淘宝优惠',
                    list: [
                        {
                            name: 'all',
                            text: '全部'
                        },
                        {
                            name: 'free-shipping-card',
                            text: '包邮卡'
                        },
                        {
                            name: 'coupon',
                            text: '抵钱购'
                        },
                        {
                            name: 'alipay-wallet',
                            text: '支付宝钱包'
                        }
                    ]
                }
            ]
        }
    ]
};


class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    filter(query) {
        console.log(query);
    }
    componentWillMount() {
        handleStorage.set('data', [{name: 'qi', age: 123}]);
        //handleStorage.set('data',123);
        let data = handleStorage.get('data');
        handleStorage.remove('data');
        console.log(data, typeof data);
    }
    componentDidMount(){
        getData('/100_100.jpeg',{})
    }

    render() {
        return (
            <div>
                Home
                <Dropdown {...dropDownData} onFilter={this.filter} />
                <PullLoader style={{height:1000}} loading onPull={()=>{
               console.log('pull')
               }}>
                    <ImageSlider data={imageSliderData}/>
                    <div>
                        <Button style={{backgroundColor:lightGreen500}}>我是绿色按钮</Button>
                        <Button style={{backgroundColor:deepOrange200}}>我是橙色的按钮</Button>
                        <Button style={{backgroundColor:blueGrey800}}>我是深色按钮</Button>
                        <Button style={{backgroundColor:deepPurple700}}>我是紫色按钮</Button>
                    </div>
                    {iconList.map(function (name, key) {
                        return (
                            <Icon name={name} key={key}/>
                        )
                    })}

                    <p>
                        <i className="material-icons">home</i>
                    </p>
                    <div className="gap-side">
                        <PlusMinus value={10} min={0} max={100} onChange={()=>{}}/>
                    </div>
                    <TopAction/>
                </PullLoader>
            </div>
        )
    }
}
;
export  default Home;