/**
 * Created by pacman29 on 15.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),
  word: null,

  dialect: this.get('word').dialect,
  slang: this.get('word').slang,

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
    this._super();
    this.get('dictionary').dialects().then(function (dialects) {
      this.set('select_dialects', dialects);
      this.get('select_dialects').forEach(iter => {
        if(iter === this.get('word').dialect){
          iter.selected = true;
        }
      })
    }.bind(this));
    this.get('dictionary').slangs().then(function (slangs) {
      this.set('select_slangs', slangs);
      this.get('select_slangs').forEach(iter => {
        if(iter === this.get('word').slang){
          iter.selected = true;
        }
      })
    }.bind(this));
  },
});
