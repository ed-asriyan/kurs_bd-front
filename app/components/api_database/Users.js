/**
 * Created by pacman29 on 07.06.17.
 */
import baseSender from 'BaseSender';

export default class Users extends baseSender {
  constructor(host) {
    if (Users.__instance) {
      return Users.__instance;
    }
    super(host);
    Users.__instance = this;
    this.__main_url = "/user";
  }

  register(username,email,password){
    return this.__fetch.call("POST",this.__main_url+"/register","application/json",null,{
      username,email,password
    })
  }

  login(username,password){
    return this.__fetch.call("POST",this.__main_url+"/login","application/json",null,{
      username,password
    })
  }

  logout(){
    return this.__fetch.call("POST",this.__main_url+"/logout","application/json",null,{})
  }

  update(username,email,password){
    return this.__fetch.call("POST",this.__main_url+"/update","application/json",null,{
      username,email,password
    })
  }

  data(){
    return this.__fetch.call("GET",this.__main_url+"/data","application/json",null,{})
  }

  delete(){
    return this.__fetch.call("DELETE",this.__main_url+"/delete","application/json",null,{})
  }
}
