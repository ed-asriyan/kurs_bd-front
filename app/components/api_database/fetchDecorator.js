/**
 * Created by pacman29 on 07.06.17.
 */
import fetch from 'fetch';

export default class fetchDecorator{
  constructor(host){
    this._host = host;
    this._fetch = fetch;
  }

  get host() {
    return this._host;
  }

  set host(value) {
    this._host = value;
  }

  call(httpMethod, url, content_type, params, body){
    const initPomise = {
      method: httpMethod,
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-type': content_type,
        'Cookie': this._cookie
      }
    };
    if (httpMethod === 'POST') {
      if (body !== undefined) {
        initPomise.body = JSON.stringify(body);
      }
    }

    let __url = this._host+url;

    if(params !== null){
      __url+='?';
      for(let key in params){
        __url += `${key}=${params[key]}&`;
      }
      __url = __url.slice(0,-1);
    }

    return this._fetch(__url, initPomise)
      .then(response => {
        return response.json();
      })
      .then(response => {
        if (!response.result) {
          throw new Error(response.errorMsg);
        } else {
          return response.data;
        }
      });
  }

}
