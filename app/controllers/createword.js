/**
 * Created by pacman29 on 16.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  managedictionary: Ember.inject.service('managedictionary'),
  dictionary: Ember.inject.service('dictionary'),
  index: Ember.inject.controller('index'),

  word: null,
  select_dialects: null,
  select_slangs: null,
  file: null,
  slang: null,
  description: null,


  init(){
    this.get('dictionary').dialects().then(function (dialects) {
      this.set('select_dialects',dialects);
      this.set('dialect',dialects[0].dialect);
    }.bind(this));
    this.get('dictionary').slangs().then(function (slangs) {
      this.set('select_slangs',slangs);
      this.set('slang',slangs[0].slang);
    }.bind(this));
  },

  actions: {
    changeword(){
      this.get('managedictionary').create_word(this.get('word'),
      this.get('dialect'),this.get('slang'),
      this.get('description'),this.get('file')).then(function (response) {
        this.get('dictionary').words().then(function (words) {
          this.get('index').set('words',words);
        }.bind(this));
        alert(response.message);
      }.bind(this)).catch((e)=>{
        alert(e.message)
      });
    },


    addfile(evt){
      this.set('file',evt.target.files[0]);
    },

    getslang(value){
      this.set('slang',value);
    },

    getdialect(value){
      this.set('dialect',value);
    },

    getdescription(value){
      this.set('description',value);
    },
  }

});
