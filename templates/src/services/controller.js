import { Link, browserHistory } from 'react-router';
import superagent from 'superagent';
import { message } from 'antd';

export function request(options) {
  
  let {
    url,
    method,
    params,
    headers,
    timeout,
  } = options;

  if (!method) {
    method = 'get';
  }

  if (!headers) {
    headers = {};
  }

  timeout = timeout || 120000;
  // if(flag < 2){
    return new Promise((resolve, reject) => {
    superagent
      [method](url)
      .set(headers)[method === 'get' ? 'query' : 'send'](params)
      .withCredentials()
      .timeout(timeout)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          reject(err);
        }

        if (!res.body) {
          try {
            res.body = JSON.parse(res.text)
          } catch (err) {
            return reject(err);
          }
        }

        if (!res.body) {
          return reject(res);
        }

        res = res.body;

        // 未登录 & 已登录但用户信息不正确 直接跳转登录页面
        if (res.code === 302 || res.code === 11000) {

           location.href = res.data;
           //location.href = '/login'
        }
        
        //通用组件列表数据，出错code=10110
        if(res.code === 10110){
          message.error(res.msg);
        }

        //用户身份修改，如果没有权限code=10001
        if (res.code === 10001) {
          message.error(res.msg);
        }

        if(res.code === 10000) {
          message.error(res.msg);
        }

        if (res.code == 0 || res.code === 200) {
          if (res.data !== undefined) {
            resolve(res.data);
          } else {
            resolve(res.msg || res.result || res.r || res.rs);
          }
        }

        reject(res);
      });
  });
  // }
  
}