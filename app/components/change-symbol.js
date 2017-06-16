/**
 * Created by pacman29 on 16.06.17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  dictionary: Ember.inject.service('dictionary'),
  managedictionary: Ember.inject.service('managedictionary'),
  index: Ember.inject.controller('index'),

  symbol: null,
  select_dialects: null,
  description: null,
  newdialect: null,
  newsymbol: null,

  didInsertElement(){
    this._super(...arguments);
    this.get('dictionary').dialects().then(function (dialects) {
      this.set('select_dialects',dialects);
      this.get('select_dialects').forEach(iter => {
        if(this.get('symbol').dialect === iter.dialect){
          iter.selected = true;
        }
      })
    }.bind(this));
    this.set('newdialect', this.get('symbol').dialect);
    this.set('description', this.get('symbol').description);
    this.set('newsymbol', this.get('symbol').symbol);
  },

  actions: {
    getdialect(value){
      this.set('newdialect',value);
    },

    getdescription(value){
      this.set('description',value);
    },

    changesymbol(){
      this.get('managedictionary').change_symbol(this.get('symbol').symbol,this.get('symbol').dialect,
        this.get('newsymbol'),this.get('newdialect'),this.get('description'))
        .then(function (response) {
          alert(response.message);
        }.bind(this))
    }
  },


});
