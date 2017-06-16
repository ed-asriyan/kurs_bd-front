/**
 * Created by pacman29 on 16.06.17.
 */
import Ember from 'ember';


export default Ember.Service.extend({
  network: Ember.inject.service('network'),

  changerole(username,newrole){
    return this.get('network').call("POST","manageusers/changerole","application/json",null,{
      username,newrole
    })
  },

  deleteuser(username){
    return this.get('network').call("POST","manageusers/deleteuser","application/json",null,{
      username
    })
  },

  users(){
    return this.get('network').call("GET","manageusers/users","application/json",null,{})
  },
});
