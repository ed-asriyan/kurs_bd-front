/**
 * Created by pacman29 on 14.06.17.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  dictionary: Ember.inject.service('dictionary'),
  session: Ember.inject.service('session'),
  user: Ember.computed.alias('session.user'),
  changelanguage_controller: Ember.inject.controller('changelanguage'),
  managedictionary: Ember.inject.service('managedictionary'),
  languages: null,

  init() {
    this._super();
    this.get('dictionary').languages().then(function (languages) {
      this.set('languages', languages);
    }.bind(this));
  },

  actions: {
    changelanguage(language){
      this.get('changelanguage_controller').set('language',language);
      this.transitionToRoute('changelanguage');
    },

    createlanguage(){
      this.transitionToRoute('createlanguage')
    },

    deletelanguage(language){
      this.get('managedictionary').delete_language(language.language).then(function (response) {
        alert(response.message);
      }.bind(this));
    }
  }
});
