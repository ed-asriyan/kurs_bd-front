/**
 * Created by pacman29 on 15.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.user'),
  symbols: null,

  init() {
    this._super();
    this.get('dictionary').symbols().then(function (symbols) {
      this.set('symbols', symbols);
    }.bind(this));
  },

  actions:{
    createsymbol(){
      this.transitionToRoute('createsymbol')
    }
  }
});
