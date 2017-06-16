/**
 * Created by pacman29 on 16.06.17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  dictionary: Ember.inject.service('dictionary'),
  managedictionary: Ember.inject.service('managedictionary'),
  index: Ember.inject.controller('index'),

  language: null,
  description: null,

  didInsertElement(){
    this._super(...arguments);
    this.set('description', this.get('language').description);
  },

  actions: {
    getdescription(value){
      this.set('description',value);
    },

    changelanguage(){
      this.get('managedictionary').change_language(this.get('language').language,
        this.get('description'))
        .then(function (response) {
          alert(response.message);
        }.bind(this))
    }
  },


});
