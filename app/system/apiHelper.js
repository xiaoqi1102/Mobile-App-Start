/**
 * Created by yzsoft on 16/6/29.
 */
//import fetch from 'fetch'
//import 'fetch'
import 'isomorphic-fetch'
let isMock = false;
import {apiHostUrl} from './systemConfig';
//操作数据的方法
/*export const operateData = (url, method, data)=> {
 return new Promise(function (resolve, reject) {
 var token = systemConfig.handleToken.get();
 $.ajax({
 url: url,
 type: method,
 data: data,
 contentType:'application/json',
 beforeSend: function (xhr) {
 xhr.setRequestHeader("token", token);
 },
 success: function (res) {
 //debugger;
 if (res.isError) {
 logger.error(res.errorDesc);
 store.dispatch(showMessage("错误" + res.errorDesc));
 //messageModal.show("错误", res.errorDesc, null, function () { });
 reject(res);
 } else {
 // succ(res);
 resolve(res);
 }
 },
 error: function (req, status, errinfo) {
 logger.error(req);
 logger.log(req.status);

 reject(req);
 //debugger;
 if (req.status == '403') {
 //console.log('登陆票据已经超时，点击确定重新登陆');
 store.dispatch(setModalCertainCallback(()=> {
 hashHistory.replace('/login')
 }));
 store.dispatch(showMessage('登陆票据已经超时，点击确定重新登陆', '登陆超时'));
 /!* messageModal.show("登陆超时", "登陆票据已经超时，点击确定重新登陆.", function () {
 //debugger;
 //todo 暂时注释sessionData的调用
 //sessionData.removeSessionData();
 dataStore.handleSession.remove('isLogined');
 window.location.href = "../../../index.html";
 }, messageModal.close);*!/
 } else {
 //if(status.indexOf("5") == 0)
 logger.error("接口程序错误。", errinfo);
 store.dispatch(showMessage("接口程序错误,技术信息" + errinfo));
 }
 }
 });

 });
 };*/
export const operateData = (url, method, data)=> {
    let myHeaders = new Headers();
    myHeaders.append('Content-type', 'image/jpeg');
    myHeaders.append('Access-Control-Allow-Origin','*');
    myHeaders.append( 'Accept', 'image/jpeg');
    console.log(myHeaders);
    let myInit = {
        method,
        headers: myHeaders,
        data,
        cache:'default',
        mode: 'cors',
        credentials: 'include'
    };
    console.log(url);
    let myRequest=new Request(url);
    myRequest=new Request('/100_100.jpeg');
    //myRequest.append('url',url);
    fetch(myRequest,myInit).then(function (resolve, reject) {
    })
};
export const getMockData = (url, data)=> {
    return operateData('/data/' + url + '.json', 'get', data)
};
//get数据的方法
export const getData = (url, data)=> {
    if (isMock) {
        return getMockData(url, data)
    } else {
        return operateData(apiHostUrl + url, 'get', data)
    }
};
//post 数据方法
export const postData = (url, data)=> {
    return operateData(apiHostUrl + url, 'post', data);
};
