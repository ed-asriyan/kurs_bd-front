/**
 * Created by pacman29 on 16.06.17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  dictionary: Ember.inject.service('dictionary'),
  managedictionary: Ember.inject.service('managedictionary'),
  index: Ember.inject.controller('index'),

  dialect: null,
  select_languages: null,
  language: null,
  description: null,
  newdialect: null,

  didInsertElement(){
    this._super(...arguments);
    this.get('dictionary').languages().then(function (languages) {
      this.set('select_languages',languages);
      this.get('select_languages').forEach(iter => {
        if(this.get('dialect').language === iter.language){
          iter.selected = true;
        }
      })
    }.bind(this));
    this.set('language', this.get('dialect').language);
    this.set('description', this.get('dialect').description);
    this.set('newdialect',this.get('dialect').dialect)
  },

  actions: {
    getlanguage(value){
      this.set('language',value);
    },

    getdescription(value){
      this.set('description',value);
    },

    changedialect(){
      this.get('managedictionary').change_dialect(this.get('dialect').dialect,
        this.get('newdialect'),this.get('language'),this.get('description'))
        .then(function (response) {
          alert(response.message);
        }.bind(this))
    }
  },


});
