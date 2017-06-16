/**
 * Created by pacman29 on 16.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.user'),

  manageusers: Ember.inject.service('manageusers'),
  users: null,

  init(){
    this.get('manageusers').users().then(function(users){
      this.set('users',users.users);
      this.get('users').forEach(iter => {
        if(iter.type === "MODERATOR"){
          iter.moderator = true;
        } else {
          iter.usual = true;
        }
      })
    }.bind(this))
  },

  actions: {
    setmoderator(user){
      this.get('manageusers').changerole(user.username,"MODERATOR").then(function (response) {
        alert(response.message);
      })
    },

    setusual(user){
      this.get('manageusers').changerole(user.username,"USUAL").then(function (response) {
        alert(response.message);
      })
    },
  }
});
