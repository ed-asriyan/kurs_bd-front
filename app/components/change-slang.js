/**
 * Created by pacman29 on 16.06.17.
 */
import Ember from 'ember';

export default Ember.Component.extend({
  dictionary: Ember.inject.service('dictionary'),
  managedictionary: Ember.inject.service('managedictionary'),
  index: Ember.inject.controller('index'),

  slang: null,
  newslang: null,
  description: null,

  didInsertElement(){
    this._super(...arguments);
    this.set('description', this.get('slang').description);
    this.set('newslang',this.get('slang').slang)
  },

  actions: {
    getdescription(value){
      this.set('description',value);
    },

    changeslang(){
      this.get('managedictionary').change_slang(this.get('slang').slang,
        this.get('newslang'),this.get('description'))
        .then(function (response) {
          alert(response.message);
        }.bind(this))
    }
  },


});
