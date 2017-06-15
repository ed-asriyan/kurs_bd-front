/**
 * Created by pacman29 on 15.06.17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  dictionary: Ember.inject.service('dictionary'),
  changeword_controller: Ember.inject.controller('changeword'),

  word: null,
  select_dialects: null,
  select_slangs: null,

  didInsertElement(){
    this._super(...arguments);
    this.get('dictionary').dialects().then(function (dialects) {
      this.set('select_dialects',dialects);
      this.get('select_dialects').forEach(iter => {
        if(this.get('word').get('dialect') === iter.get('dialect')){
          iter.set('selected',true);
        }
      })
    }.bind(this));
    this.get('dictionary').slangs().then(function (slangs) {
      this.set('select_slangs',slangs);
      this.get('select_slangs').forEach(iter => {
        if(this.get('word').get('slang') === iter.get('slang')){
          iter.set('selected',true);
        }
      })
    }.bind(this));
  },

  dialect: null,
  slang: null,
  description: null,

  actions: {
    getslang(value){
      this.set('slang',value);
    },

    getdialect(value){
      this.set('dialect',value);
    },

    getdescription(value){
      this.set('description',value);
    }
  },


});
