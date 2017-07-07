/**
 * Created by pacman29 on 16.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  managedictionary: Ember.inject.service('managedictionary'),
  dictionary: Ember.inject.service('dictionary'),
  index: Ember.inject.controller('index'),

  symbol: null,
  select_dialects: null,
  file: null,
  description: null,
  dialect: null,

  init(){
    this.get('dictionary').dialects().then(function (dialects) {
      this.set('select_dialects',dialects);
      this.set('dialect',dialects[0].dialect);
    }.bind(this));
  },

  actions: {
    createsymbol(){
      this.get('managedictionary').create_symbol(this.get('symbol'),
        this.get('dialect'),this.get('description'),
        this.get('file')).then(function (response) {
          if(response.message)
            alert(response.message);
      }.bind(this));
    },


    addfile(evt){
      this.set('file',evt.target.files[0]);
    },

    getdialect(value){
      this.set('dialect',value);
    },

    getdescription(value){
      this.set('description',value);
    },
  }

});
