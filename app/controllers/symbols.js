/**
 * Created by pacman29 on 15.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.user'),
  changesymbol_controller: Ember.inject.controller('changesymbol'),
  managedictionary: Ember.inject.service('managedictionary'),
  symbols: null,
  dialect: null,
  word: null,
  select_dialects: null,

  init() {
    this._super();
    this.get('dictionary').symbols().then(function (symbols) {
      this.set('symbols', symbols);
    }.bind(this));
    this.get('dictionary').dialects().then(function (dialects) {
      this.set('select_dialects', dialects);
      this.set('dialect',dialects[0].dialect);
    }.bind(this));
  },

  actions:{
    createsymbol(){
      this.transitionToRoute('createsymbol')
    },

    changesymbol(symbol){
      this.get('changesymbol_controller').set('symbol',symbol);
      this.transitionToRoute('changesymbol');
    },

    deletesymbol(symbol){
      this.get('managedictionary').delete_symbol(symbol.symbol,symbol.dialect).then(function (response) {
        alert(response.message);
      }.bind(this));
    },

    getdialect(value){
      this.set('dialect',value);
    },

    convert(){
      this.get('dictionary').wordinsymbol(this.get('word'),this.get('dialect')).then(function (symbols) {
        this.set('symbols', symbols);
      }.bind(this));
    }
  }
});
