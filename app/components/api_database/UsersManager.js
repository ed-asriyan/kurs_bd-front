/**
 * Created by pacman29 on 07.06.17.
 */
import baseSender from 'BaseSender';

export default class UsersManager extends baseSender {
  constructor(host) {
    if (UsersManager.__instance) {
      return UsersManager.__instance;
    }
    super(host);
    UsersManager.__instance = this;
    this.__main_url = "/manageusers";
  }

  changerole(username,newrole){
    return this.__fetch.call("POST",this.__main_url+"/changerole","application/json",null,{
      username,newrole
    })
  }

  deleteuser(username){
    return this.__fetch.call("POST",this.__main_url+"/deleteuser","application/json",null,{
      username
    })
  }

  users(){
    return this.__fetch.call("GET",this.__main_url+"/users","application/json",null,{})
  }
}
