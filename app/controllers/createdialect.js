/**
 * Created by pacman29 on 16.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  managedictionary: Ember.inject.service('managedictionary'),
  dictionary: Ember.inject.service('dictionary'),
  index: Ember.inject.controller('index'),

  dialect: null,
  select_languages: null,
  language: null,
  description: null,


  init(){
    this.get('dictionary').languages().then(function (languages) {
      this.set('select_languages',languages);
      this.set('language',languages[0].language);
    }.bind(this));
  },

  actions: {
    createdialect(){
      this.get('managedictionary').create_dialect(this.get('dialect'),
        this.get('description'),this.get('language')).then(function (response) {

        this.get('dictionary').dialects().then(function (dialects) {
          this.get('index').set('select_dialects',dialects);
        }.bind(this));

        alert(response.message);
      }.bind(this)).catch((e)=>{
        alert(e.message)
      });
    },

    getlanguage(value){
      this.set('language',value);
    },

    getdescription(value){
      this.set('description',value);
    },
  }

});
