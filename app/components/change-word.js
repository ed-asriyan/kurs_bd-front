/**
 * Created by pacman29 on 15.06.17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  dictionary: Ember.inject.service('dictionary'),
  changeword_controller: Ember.inject.controller('changeword'),

  select_dialects: null,
  select_slangs: null,

  didInsertElement(){
    this._super(...arguments);
    this.get('dictionary').dialects().then(function (dialects) {
      this.set('select_dialects',dialects);
    }.bind(this));
    this.get('dictionary').slangs().then(function (slangs) {
      this.set('select_slangs',slangs);
    }.bind(this));
  },


});
