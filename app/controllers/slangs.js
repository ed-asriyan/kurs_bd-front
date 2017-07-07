/**
 * Created by pacman29 on 15.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.user'),
  changeslang_controller: Ember.inject.controller('changeslang'),
  managedictionary: Ember.inject.service('managedictionary'),
  slangs: null,

  init() {
    this._super();
    this.get('dictionary').slangs().then(function (slangs) {
      this.set('slangs', slangs);
    }.bind(this));
  },

  actions:{
    createslang(){
      this.transitionToRoute('createslang')
    },

    changeslang(slang){
      this.get('changeslang_controller').set('slang',slang);
      this.transitionToRoute('changeslang');
    },

    deleteslang(slang){
      this.get('managedictionary').delete_slang(slang.slang).then(function (response) {
        alert(response.message);
      }.bind(this));
    }
  }
});
