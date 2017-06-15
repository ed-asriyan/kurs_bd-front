/**
 * Created by pacman29 on 15.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),
  word: null,

  dialect: null,
  slang: null,

  select_slangs: null,
  select_dialects: null,

  actions: {
    getslang(value){
      this.set('slang',value);
    },

    getdialect(value){
      this.set('dialect',value);
    },
  },

  init() {
    this.get('dictionary').dialects().then(function (dialects) {
      dialects.forEach(dialect => {
        Ember.$(".changeword__select_dialects").add(`<option>${dialect.dialect}</option>`);
      })
    }.bind(this));
    this.get('dictionary').slangs().then(function (slangs) {
      slangs.forEach(slang => {
        Ember.$(".changeword__select_slangs").add(`<option>${slang.slang}</option>`);
      })
    }.bind(this));
  },
});
