/**
 * Created by pacman29 on 16.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  managedictionary: Ember.inject.service('managedictionary'),
  dictionary: Ember.inject.service('dictionary'),
  index: Ember.inject.controller('index'),

  language: null,
  description: null,


  init(){
  },

  actions: {
    createlanguage(){
      this.get('managedictionary').create_language(this.get('language'),
        this.get('description')).then(function (response) {

        alert(response.message);
      }.bind(this)).catch((e)=>{
        alert(e.message)
      });
    },

    getdescription(value){
      this.set('description',value);
    },
  }

});
