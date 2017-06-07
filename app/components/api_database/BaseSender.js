/**
 * Created by pacman29 on 07.06.17.
 */
import fetch from 'fetchDecorator';
export default class BaseSender{
  constructor(host){
    if(BaseSender.__instance){
      return BaseSender.__instance;
    }
    BaseSender.__instance = this;
    this.__fetch = new fetch(host);
  }

  get host() {
    return this.__fetch.host;
  }

  set host(value) {
    this.__fetch.host = value;
  }
}
