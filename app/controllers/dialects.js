/**
 * Created by pacman29 on 15.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.user'),
  changedialect_controller: Ember.inject.controller('changedialect'),
  managedictionary: Ember.inject.service('managedictionary'),
  dialects: null,

  init() {
    this._super();
    this.get('dictionary').dialects().then(function (dialects) {
      this.set('dialects', dialects);
    }.bind(this));
  },

  actions:{
    createdialect(){
      this.transitionToRoute('createdialect')
    },

    changedialect(dialect){
      this.get('changedialect_controller').set('dialect',dialect);
      this.transitionToRoute('changedialect');
    },

    deletedialect(dialect){
      this.get('managedictionary').delete_dialect(dialect.dialect).then(function (response) {
        alert(response.message);
      }.bind(this));
    }
  }
});
